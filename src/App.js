import React from 'react'
import Splash from './components/Splash'
import Events from './components/Events'
import ErrorPage from './components/ErrorPage'
import Burger from './components/Burger'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import theme from './theme'

let App = () =>
  <BrowserRouter>
    <div>
      <Switch>
        <Route
          exact path="/"
          component={() =>
            <div>
              <Burger />
              <Splash />
              <Events />
            </div>
          }
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

export default App
