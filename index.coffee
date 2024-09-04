import * as Sentry from "@sentry/react"

Sentry.init
  dsn: "https://de4242ecc3294807ae970690c7e87313@o289382.ingest.us.sentry.io/4507892583694336"
  integrations: [
    Sentry.browserTracingIntegration()
    Sentry.replayIntegration()
  ]
  # Tracing
  tracesSampleRate: 1.0 #  Capture 100% of the transactions
  # Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/torontojs\.com\/api/]
  # Session Replay
  replaysSessionSampleRate: 0.1 # This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 # If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.

import React from 'react'
import { render } from 'react-dom'

import {
  BrowserRouter
  Routes
  Route
} from "react-router-dom"

import '/styles/index.sass'

import screens from './screens/*/index.coffee'
import pages from './pages/*.md'
import Page from '/components/page'

App = ->
  <BrowserRouter>
    <Routes>
      {for name, {default: Screen} of screens
        <Route
          key={name}
          path={Screen.path or name}
          element={<Screen/>}
        />
      }
      {for name, {default: content} of pages
        <Route
          key={name}
          path={name}
          element={<Page content={content}/>}
        />
      }
    </Routes>
  </BrowserRouter>

render <App/>, document.getElementById('app')
