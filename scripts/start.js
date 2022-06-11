import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from '../config/webpack.config.js';
import devServerConfig from '../config/webpackDevServer.config.js';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';

const config = webpackConfig('development');
const serverConfig = devServerConfig();
const configWithSmp = new SpeedMeasurePlugin().wrap(config);
const compiler = webpack(configWithSmp);
const devServer = new WebpackDevServer(serverConfig, compiler);

const runServer = async () => {
  await devServer.start();
};
runServer();
