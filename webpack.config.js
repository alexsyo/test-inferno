const path = require('path');
const debug = process.env.NODE_ENV != "production";

module.exports = {
  devtool: debug ? 'source-map' : null,
  entry: './client/src/start.js',
  output: {
    filename: 'bundle.js',
    path: '/client/dist'
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
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: [
          "babel-loader"
        ]
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './client/src'),
      "node_modules"
    ]
  }
};