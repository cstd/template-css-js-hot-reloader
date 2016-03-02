var express = require('express');
var app = express();

app.use('/', express.static('./public'));
app.use('/static/', express.static('./public/static'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('SoSub.Org Production listening at http://%s:%s', host, port);
});