const express = require('express');
const webpack = require('webpack');
const compiler = webpack(require('./webpack.config.js'));
const path = require('path');
const app = express();
const nodeEnv = process.env.NODE_ENV || 'development';

app.use(require('webpack-dev-middleware')(compiler));
app.use((req, res, next) => {
  if (nodeEnv === 'development') {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) return next(err);
      res.set('content-type', 'text/html').end(result);
    });
    return;
  }
  if (nodeEnv === 'production') {
    res.sendFile(path.join(__dirname, './index.html'));
  }
});
app.listen(process.env.PORT || 8080);
