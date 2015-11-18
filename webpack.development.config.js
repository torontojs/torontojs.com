var webpack = require("webpack");
var config = require("./webpack.config.js");

config.entry = [
  //"webpack-dev-server/client?http://localhost:8080"
  "webpack-hot-middleware/client"
, config.entry
];

config.plugins.unshift(
  new webpack.HotModuleReplacementPlugin()
);

config.module.loaders[0].query = {
  stage: 0
, plugins: ["react-transform"]
, extra: {
    "react-transform": {
      transforms: [{
        transform: "react-transform-hmr"
      , imports: ["react"]
      , locals: ["module"]
      }
    , {
        transform: "react-transform-catch-errors"
      , imports: ["react", "redbox-react"]
      }]
    }
  }
}

if(!config.plugins) config.plugins = [];

config.plugins.push(
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("development")
  })
);

module.exports = config;
