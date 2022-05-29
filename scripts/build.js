// node env 제공해야 함

import path from 'path';
import paths from '../config/paths.js';
import webpack from 'webpack';
import { webpackConfig } from '../config/webpack.config.js';

const config = webpackConfig('production');
const appPackage = paths.appPackageJson;
const publicUrl = paths.publicPath;
const publicPath = config.output.publicPath;
const buildFolder = path.relative(process.cwd(), paths.appBuild);
const compiler = webpack(config);
