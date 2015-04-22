import koa from "koa";
import route from "koa-route";
import React from "react";

import "./webpackDevServer";

import Application from "./components/Application.js";
import Home from "./components/Home.js"
import AboutUs from "./components/AboutUs.js";

import EntryPointStore from "./entryPoint/Store";
import {serverPort, environment} from "./appConfig";

const app = koa();

let webpackEntryFileName = EntryPointStore.entryPoint;

EntryPointStore.on("change", () => {
  webpackEntryFileName = EntryPointStore.entryPoint;
  console.log("NEW ENTRYPOINT", EntryPointStore.entryPoint);
});

function renderPage(Page) {
  return function *() {
    this.body = React.renderToStaticMarkup(
      <Application page={Page} clientPath={webpackEntryFileName} />
    );
  }
}

app.use(route.get("/", renderPage(Home)));
app.use(route.get("/about", renderPage(AboutUs)));

app.listen(serverPort);
