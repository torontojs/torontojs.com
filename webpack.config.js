import webpack from "webpack";

export default {
  entry: "./client.js"
, output: {
    path: __dirname + "/build"
  , publicPath: "/public/"
  , filename: "[name].[chunkhash].js"
  , chunkFilename: "[id].[chunkhash].client.js"
  }
, resolve: {
    extensions: [
      ""
    , ".js"
    ]
  }
, module: {
    loaders: [
      {
        test: /\.js$/
      , exclude: /node_modules/
      , loader: "babel-loader"
      }
    , {
        test: /\.less$/
      , loader: "style-loader!css-loader!less-loader"
      }
    , {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/
      , loader: "file"
      }
    , {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/
      , loader: "file"
      }
    , {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/
      , loader: "file"
      }
    , {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/
      , loader: "file"
      }
    ]
  }
, plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true)
  ]
, devtool: "eval"
}
