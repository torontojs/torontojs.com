import * as Sentry from "@sentry/aws-serverless"
import { nodeProfilingIntegration } from "@sentry/profiling-node"

Sentry.init({
  dsn: "https://dad25bea52bbb5cffbd7c49f357c0935@o289382.ingest.us.sentry.io/4507892554399744",
  integrations: [
    nodeProfilingIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions

  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
})

import jwt from 'jsonwebtoken'
import assert from 'node:assert'

const handler = async (req, context) => {
  try {
    keyCheck()
    const url = new URL(req.url)

    const code = url.searchParams.get('code')
    const state = url.searchParams.get('state')
    const { access_token } = await exchange_code(code)
    const user = await user_from_access_token(access_token)
    Sentry.setUser({id: user.github, email: user.email, username: user.name})
    // if we failed to get the email as part of the user object, grab it from the emails endpoint
    if (!user.email) user.email = await primary_email_from_access_token(access_token)
    Sentry.setUser({id: user.github, email: user.email, username: user.name})

    const token = jwt_for_user(user)

    context.cookies.set({ name: 'token', value: token, path: '/' })

    const redirectUrl = "/"
    return new Response(null, {
       status: 302,
       headers: new Headers({ Location: `/?${state || ''}`})
    })

  } catch(e) {
    Sentry.captureException(e)
    console.log(e)
    console.log(`token: ${token}`)
    return new Response(e, { status: 500 })
  }
}

const exchange_code = async (code) => {
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: code,
    }),
    headers: new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
    }),
  })

  if (!response.ok) throw new Error(`Response status: ${response.status}\n\n${await response.text()}`)

  return response.json()
}

const user_from_access_token = async (access_token) => {
  const response = await fetch("https://api.github.com/user", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${access_token}`,
    }),
  })

  if (!response.ok) throw new Error(`Response status: ${response.status}\n\n${await response.text()}`)

  const {
    login,
    email,
    name,
    company,
    bio,
    blog,
    avatar_url,
    created_at,
  } = await response.json()
  return {
    name,
    email,
    company,
    bio,
    github: login,
    website: blog,
    avatar: avatar_url,
    created_at,
  }
}

const primary_email_from_access_token = async (access_token) => {
  const response = await fetch("https://api.github.com/user/emails", {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${access_token}`,
    }),
  })

  if (!response.ok) throw new Error(`Response status: ${response.status}\n\n${await response.text()}`)

  const emails = await response.json()

  for (const { email, primary, verified } of emails) if (verified && primary) return email
}

const jwt_for_user = (user) => {
  return jwt.sign(user, process.env.JWT_PRIVATE_KEY, { algorithm: 'ES512' })
}

const keyCheck = () => {
  assert(
    process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET, `

    A GitHub application is required.

    Create one at https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app,
    then place the keys (GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET) in .env.local for testing`
  )
  assert(
    process.env.JWT_PUBLIC_KEY && process.env.JWT_PRIVATE_KEY, `

    A ES512 keypair is required.

    Generate the keys (JWT_PUBLIC_KEY and JWT_PRIVATE_KEY) at https://jwt-keys.21no.de and place them in .env.local for testing`
  )
}

export default Sentry.wrapHandler(handler, {captureTimeoutWarning: false})
