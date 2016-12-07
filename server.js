/* eslint-disable no-console */

const path = require('path');
const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require(path.join(__dirname, process.argv[2]));

const app = express();
const compiler = webpack(config);

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  stats: { colors: true },
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.info('Dev server listening at http://%s:%s', host, port);
});
