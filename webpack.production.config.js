var webpack = require("webpack");
var config = require("./webpack.config.js");

if(!config.plugins) config.plugins = [];

config.plugins.push(
  new webpack.DefinePlugin({
    __DEV__: false
  })
, new webpack.optimize.UglifyJsPlugin()
, new webpack.optimize.DedupePlugin()
, new webpack.optimize.MinChunkSizePlugin({
    minChunkSize: 2048
  })
, new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  })
)

module.exports = config;
