var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/js/index'
  ],
  output: {
  	path: path.join(__dirname, 'build'),
    publicPath: '/static/',
    filename: 'js/app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.join(__dirname, 'src/js')
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}