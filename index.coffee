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
