// @flow

import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import StaticPage from "./components/StaticPage"
import ErrorPage from "./components/ErrorPage"
import Splash from "./components/Splash"
import theme from "./theme"

let App = () => (

  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/p(age)?/:page" component={StaticPage} />
        <Route
          exact
          path="/workshop"
          component={() => (
            <div>
              <Splash backgroundColor={theme.secondary} page="WORKSHOP" />
            </div>
          )}
        />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App
