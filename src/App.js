// @flow

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import EventsPage from './components/EventsPage'
import StaticPage from './components/StaticPage'
import ErrorPage from './components/ErrorPage'
import Splash from './components/Splash'
import Burger from './components/Burger'
import theme from './theme'

let App = () => (
  <BrowserRouter>
    <div>
      <Burger/>
      <Switch>
        <Route
          exact path="/"
          component={EventsPage}
        />
        <Route
          exact path="/p(age)?/:page"
          component={StaticPage}
        />
        <Route
          exact path="/workshop"
          component={() =>
            <div>
              <Splash
                backgroundColor={theme.secondary}
                page="WORKSHOP"
              />
            </div>
          }
        />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
