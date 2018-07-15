var webpack = require("webpack");

module.exports = {
  cache: true,
  entry: "./src/index.js",
  output: {
    path: __dirname + "/src/build",
    filename: "bundle.js",
    publicPath: "./build/"
  },
  mode: 'development',
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.js$/, loader: "babel-loader", query: { presets: ['es2015', 'react',  'stage-2'] },   exclude: /(disposables)/, },
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|jpg|GIF)$/, loader: 'url-loader?limit=8192' }
    ]
  }
};