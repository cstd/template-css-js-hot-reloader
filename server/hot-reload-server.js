var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');


var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.resolve('public/index.html'));
});

app.get('/page1/*', function(req, res) {
  res.sendFile(path.resolve('public/index.html'));
});

app.get('/page2/*', function(req, res) {
  res.sendFile(path.resolve('public/index.html'));
});

app.get('/fakeData.json', function(req, res) {
  res.sendFile(path.resolve('public/fakeData.json'));
});

app.use('/static/img/', express.static('./public/static/img/'));
app.use('/static/js/jquery.min.js', express.static('./public/static/js/jquery.min.js'));

var server = app.listen(3000, function(error) {
  var host = server.address().address;
  var port = server.address().port;
  if (error) {
    console.error(error)
  } else {
    console.log("CSTD Development (Hot Reloader) listening at http://%s:%s", host, port);
  }
});