// @flow

import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import StaticPage from "./components/StaticPage"
import Splash from "./components/Splash"
import theme from "./theme"

let App = () => (

  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route path="/p(age)?/:page" component={StaticPage} />
        <Route path="/p/volunteers" component={StaticPage} />
        <Route
          exact
          path="/workshop"
          component={() => (
            <div>
              <Splash backgroundColor={theme.secondary} page="WORKSHOP" />
            </div>
          )}
        />
      </Switch>

    </div>
  </BrowserRouter>
)

export default App
