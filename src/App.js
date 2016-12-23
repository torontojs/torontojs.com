import React from 'react'
import Splash from './components/Splash'
import Events from './components/Events'
import { BrowserRouter, Match, Miss } from 'react-router'
import theme from './theme'

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
            <Splash
              backgroundColor={theme.secondary}
              page="WORKSHOP"
            />
          </div>
        }
      />
      <Miss
        component={() => <div>heyo 404</div>}
      />
    </div>
  </BrowserRouter>

export default App
