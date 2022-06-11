import paths from './paths.js';

const port = process.env.PORT || 8080;
const config = () => {
  return {
    compress: true,
    hot: true,
    server: 'https',
    static: {
      directory: paths.appPublic,
    },
    client: {
      logging: 'none',
      overlay: true,
    },
    historyApiFallback: {
      disableDotRule: true,
      index: paths.publicPath,
    },
    port,
  };
};

export default config;
