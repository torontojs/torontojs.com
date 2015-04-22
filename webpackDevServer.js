import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";

import LoadEntryPoint from "./entryPoint/Load";
import webpackConfig from "./webpack.config";

import {webpackDevServerPort} from "./appConfig";

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

webpackConfig.module.loaders[0].loader = "react-hot!" + webpackConfig.module.loaders[0].loader;

webpackConfig.plugins.unshift(
  new webpack.HotModuleReplacementPlugin()
);

webpackConfig.plugins.push(function() {
  this.plugin("done", (stats) => {
    stats = stats.toJson();
    if(!stats.errors.length) {
      let webpackEntryFileName =
        webpackConfig.output.publicPath
        + findEntryChunk(stats.chunks, "main").files[0];

      new LoadEntryPoint(webpackEntryFileName);
    }
    else {
      console.error("ERROR WHILE UPDATING ENTRYPOINT", stats.errors);
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
  , info: true
  , quiet: false
  }).listen(webpackDevServerPort, "localhost", function(err, result) {
    if (err) {
      console.error(err);
    }

    console.log(`Listening at localhost:${webpackDevServerPort}`);
});
