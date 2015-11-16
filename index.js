import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute} from "react-router";

import history from "./history";

ReactDOM.render(
  <Router history={history}>
    <Route
      component={require("./application")}
      path="/"
    >
      <IndexRoute
        component={require("./home")}
      />

      <Route
        path="upcoming_events"
        component={require("./upcomingEvents")}
      />

      <Route
        path="videos"
        component={require("./videos")}
      />

      <Route
        path="sponsors"
        component={require("./sponsors")}
      />

      <Route
        path="about"
        component={require("./about")}
      />

      <Route
        path="contact"
        component={require("./contact")}
      />
    </Route>
  </Router>
, document.getElementsByClassName("container")[0]);
