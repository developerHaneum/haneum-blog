const express = require('express');
const webpack = require('webpack');
const compiler = webpack(require('./webpack.config.js'));
const path = require('path');
const app = express();
const nodeEnv = process.env.NODE_ENV || 'development';

app.use(require('webpack-dev-middleware')(compiler));
app.use(require('webpack-hot-middleware')(compiler));
app.use((req, res, next) => {
  if (nodeEnv === 'development') {
    // 웹팩이 처리한 html 경로를 찾는다.
    const filename = path.join(compiler.outputPath, 'index.html');
    // 그 경로에에서 html 파일을 읽는다.
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) return next(err);
      res.set('content-type', 'text/html').end(result);
    });
    return;
  }

  // 운영 환경일 경우,
  if (nodeEnv === 'production') {
    // 이미 빌드한 html를 제공한다.
    res.sendFile(path.join(__dirname, './index.html'));
  }
});
app.use('/static', express.static(path.resolve(__dirname, 'dist')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});
app.listen(8080);
