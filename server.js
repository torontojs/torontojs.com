import fs from "fs";
import koa from "koa";
import route from "koa-route";
import React from "react";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";

import Application from "./templates/Application.js";
import Home from "./templates/Home.js"
import AboutUs from "./templates/AboutUs.js";

import webpackConfig from "./webpack.config";

const productionEnv = process.env.NODE_ENV === "production";
const serverPort = 1337;
const webpackDevServerPort = 1338;
let app = koa();
let webpackEntryFileName;

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

function findEntryChunk(chunks, chunkName) {
  for(
    var i = 0
      , chunk = chunks[i]
  ; i < chunks.length
  ; i++
    , chunk = chunks[i]
  ) {

    if(chunk.entry && chunk.files[0].indexOf(chunkName) === 0) {
      return chunk;
    }
  }
}

webpackConfig.entry = [
  `webpack-dev-server/client?http://localhost:${webpackDevServerPort}`
, "webpack/hot/only-dev-server"
, webpackConfig.entry
];

webpackConfig.plugins.unshift(
  new webpack.HotModuleReplacementPlugin()
);

webpackConfig.plugins.push(function() {
  this.plugin("done", (stats) => {
    stats = stats.toJson();
    if(!stats.errors.length) {
      webpackEntryFileName =
        webpackConfig.output.publicPath
        + findEntryChunk(stats.chunks, "main").files[0];

      console.log("UPDATING ENTRY TO", webpackEntryFileName);
    }
    else {
      console.error("ERROR", stats.errors);
    }
  });
});

webpackConfig.output.publicPath = `http://localhost:${webpackDevServerPort}${webpackConfig.output.publicPath}`

new WebpackDevServer(
  webpack(webpackConfig)
, {
    publicPath: webpackConfig.output.publicPath
  , hot: true
  , historyApiFallback: true
  , stats: { colors: true }
  , filename: "bundle.js"
  , info: false
  }).listen(webpackDevServerPort, "localhost", function(err, result) {
    if (err) {
      console.log(err);
    }

    console.log(`Listening at localhost:${webpackDevServerPort}`);
});
