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

export default Sentry.wrapHandler(async (req, context) => {
  try {
    // verify JWT from cookie
    const token = context.cookies.get('token')
    const user = jwt.verify(token, process.env.JWT_PUBLIC_KEY, { algorithm: 'ES512' })

    // post to slack
    await post_to_slack(slack_payload(user))

    // return 200
    return new Response('gotcha', { status: 200 })

  } catch(e) {
    Sentry.captureException(e)
    return new Response(e, { status: 500 })
  }
})

const post_to_slack = async (payload) => {
  const response = await fetch(process.env.SLACK_WEBHOOK, {
    method: "POST",
    body: JSON.stringify(payload),
  })

  if (!response.ok) throw new Error(`Response status: ${response.status}`)

  return true
}

const slack_payload = ({name, email, company, bio, github, website, avatar, created_at}) => {
  // {
  //   "name": "Kieran Huggins",
  //   "email": "kieran@kieran.ca",
  //   "company": "Universe",
  //   "bio": "Director of R&D @uniiverse / Maker of votewell.ca, baristajs, myttc\r\n/ Lover of terse, readable code",
  //   "github": "kieran",
  //   "website": "http://kieran.ca",
  //   "avatar": "https://avatars.githubusercontent.com/u/3444?v=4",
  //   "created_at": "2008-03-19T21:02:08Z",
  //   "iat": 1724362049
  // }
  const header = (text='(undefined)') => { return { type: "header", text: { type: "plain_text", text } } }
  const para = (text='(undefined)') => { return { type: "section", text: { type: "mrkdwn", text } } }
  const section = (obj={}) => { return { type: 'section', fields: Object.entries(obj).map( ([key, val]) => field(key, val) ) } }
  const field = (name, value='(undefined)') => { return { type: 'mrkdwn', text: `*${name}*\n${value}` } }
  const bio_with_avatar = (text='(undefined)', image_url='https://www.gravatar.com/avatar/?d=identicon') => { return { type: 'section', text: { type: "mrkdwn", text }, accessory: { type: "image", image_url, alt_text: 'Github Avatar' } } }
  const divider = () => { return { type: "divider" } }

  return {
    channel: process.env.SLACK_CHANNEL,
    username: 'InviteBot™',
    blocks: [
      header(name),
      para(`*Email*\n${email || 'no email available'}`),
      divider(),
      bio_with_avatar(bio, avatar),
      divider(),
      section({github: `<https://github.com/${github}|${github}>`, created_at}),
      section({company, website})
    ]
  }
}
