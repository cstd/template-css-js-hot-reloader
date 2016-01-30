var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './src/js/index.js'
    ],
    react: [
      'webpack-hot-middleware/client',
      './src/react/index.js'
    ]
  },
  output: {
  	path: path.join(__dirname, 'public/static/'),
    publicPath: '/static/',
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader : 'file-loader?name=./fonts/[hash].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}