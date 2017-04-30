// @flow

import React from 'react'
<<<<<<< HEAD
import Splash from './components/Splash'
import Events from './components/Events'
import ErrorPage from './components/ErrorPage'
import Burger from './components/Burger'
=======
>>>>>>> 0eaace596e750327b01ac0aa5f03313deceed836
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import EventsPage from './components/EventsPage'
import StaticPage from './components/StaticPage'
import ErrorPage from './components/ErrorPage'
import Splash from './components/Splash'
import theme from './theme'

let App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route
          exact path="/"
<<<<<<< HEAD
          component={() =>
            <div>
              <Burger />
              <Splash />
              <Events />
            </div>
          }
=======
          component={EventsPage}
        />
        <Route
          exact path="/p(age)?/:page"
          component={StaticPage}
>>>>>>> 0eaace596e750327b01ac0aa5f03313deceed836
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
