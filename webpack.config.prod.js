var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: {
    app: [
      './src/js/native/index.js'
    ],
    react: [
      './src/js/react/index.js'
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
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader : 'file-loader?name=./fonts/[hash].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("css/app.css")
  ]
}