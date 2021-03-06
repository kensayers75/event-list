var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var compression = require('compression');

var app = express();
var compiler = webpack(config);

app.use(compression());
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var devServer = app.listen(8888, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  var port = devServer.address().port;
  console.log('Listening at http://localhost:' + port);
});

module.exports = devServer;
