import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router";

import history from "./history";

import analytics from "./analytics";

import pegasus from "pegasus!.";

function handleRouterUpdate() {
  if(process.env.NODE_ENV === "production") {
    analytics("send", "pageview");
  }
}

ReactDOM.render(
  <Router history={history} onUpdate={handleRouterUpdate}>
    {pegasus}
  </Router>
, document.getElementsByClassName("container")[0]);
