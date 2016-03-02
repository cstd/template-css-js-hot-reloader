var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeModules = {};


fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;    
    });

module.exports = {
    name: 'server',
    target: 'node',
    entry: './server/universal-server.js',
    output: {
      path: path.join(__dirname, 'server/'),
      filename: 'universal-server-es5.js'
    },
    externals: nodeModules,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: [
                    'babel-loader'
                ]
            },
            {
                test:  /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}