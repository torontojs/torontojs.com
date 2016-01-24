import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {syncHistory} from "redux-simple-router";

import {setupIncrementalReduxReducers, addReducer} from "incremental-redux-reducers";

import routeReducer from "./routeReducer";
import history from "./history";

import analytics from "./analytics";

import "./application/style.less";

import routingConfiguration from "pegasus!.";

const reduxRouterMiddleware = syncHistory(history);

const createStoreWithMiddleware = applyMiddleware(
  thunk
, reduxRouterMiddleware
)(createStore);

// no-op reducer to be overridden by incremental-redux-reducers
const store = createStoreWithMiddleware(() => {});

setupIncrementalReduxReducers(store);

function handleRouterUpdate() {
  analytics("send", "pageview");
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} onUpdate={handleRouterUpdate}>
      {routingConfiguration}
    </Router>
  </Provider>
, document.getElementsByClassName("container")[0]);
