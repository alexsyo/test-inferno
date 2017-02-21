const path = require('path');
const debug = process.env.NODE_ENV != "production";
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: debug ? 'source-map' : null,
  entry: './client/src/start.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist')
  },
  module: {
    rules: [
      {
        test: /\.html/,
        use: [
          "file-loader?name=[name].[ext]"
        ]
      },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract([
          "css-loader",
          "sass-loader"
        ])
      },
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: [
          "babel-loader"
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      disable: false,
      allChunks: true
    })
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, './client/src'),
      "node_modules"
    ]
  }
};