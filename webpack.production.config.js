var webpack = require("webpack");
var config = require("./webpack.config.js");

config.module.loaders[0].query = {
  stage: 0
, optional: [
    "optimisation.react.constantElements"
  , "optimisation.react.inlineElements"
  ]
}

if(!config.plugins) config.plugins = [];

config.plugins.push(
  new webpack.DefinePlugin({
    __DEV__: false
  , "process.env.NODE_ENV": JSON.stringify("production")
  })
, new webpack.optimize.UglifyJsPlugin()
, new webpack.optimize.DedupePlugin()
, new webpack.optimize.MinChunkSizePlugin({
    minChunkSize: 2048
  })
)

module.exports = config;
