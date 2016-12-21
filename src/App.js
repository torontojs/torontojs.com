import React from 'react'
import Splash from './components/Splash'
import Events from './components/Events'
import { BrowserRouter, Match, Miss, Link } from 'react-router'

let App = () =>
  <BrowserRouter>
    <div>
      <Match
        exactly pattern="/"
        component={() =>
          <div>
            <Splash />
            <Events />
          </div>
        }
      />
      <Match
        exactly pattern="/workshop"
        component={() =>
          <div>
            <Splash backgroundColor="secondary"/>
            <Events />
          </div>
        }
      />
    </div>
  </BrowserRouter>

export default App
