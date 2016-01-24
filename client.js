import React from "react";
import ReactDOM from "react-dom";
import {Router} from "react-router";

import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {syncHistory} from "redux-simple-router";
import {createDevTools} from "redux-devtools";
import LogMonitor from "redux-devtools-log-monitor";
import DockMonitor from "redux-devtools-dock-monitor";

import {setupIncrementalReduxReducers, addReducer} from "incremental-redux-reducers";

import routeReducer from "./routeReducer";
import history from "./history";

import analytics from "./analytics";

import "./application/style.less";

import routingConfiguration from "pegasus!.";

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultIsVisible={false}
  >
    <LogMonitor />
  </DockMonitor>
);

const finalCreateStore = compose(
  DevTools.instrument()
)(createStore);

const reduxRouterMiddleware = syncHistory(history);

const createStoreWithMiddleware = applyMiddleware(
  thunk
, reduxRouterMiddleware
)(finalCreateStore);

// no-op reducer to be overridden by incremental-redux-reducers
const store = createStoreWithMiddleware(() => {});

setupIncrementalReduxReducers(store);

function handleRouterUpdate() {
  if(process.env.NODE_ENV === "production") {
    analytics("send", "pageview");
  }
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history} onUpdate={handleRouterUpdate}>
        {routingConfiguration}
      </Router>

      <DevTools />
    </div>
  </Provider>
, document.getElementsByClassName("container")[0]);
