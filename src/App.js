// @flow
import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import StaticPage from "./views/StaticPage"
import Landing from "./views/Landing"
import Splash from "./views/Splash"
import theme from "./theme"


let App = () => (

  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/p(age)?/:page" component={StaticPage} />
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
  </BrowserRouter >
)

export default App
