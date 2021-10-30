const dartSass = require('sass');
const paths = require('./paths');
require('dotenv').config();

const protocol = process.env.WEBPACK_PROTOCOL;
const host = process.env.WEBPACK_HOST;
const port = process.env.WEBPACK_PORT;
const siteURL = `${protocol}://${host}/`;
const isHttps = protocol === 'https';
const isHMREnabled = process.env.WEBPACK_HOT_RELOAD === 'true';
const isOpenBoolean = process.env.WEBPACK_OPEN === 'true' || process.env.WEBPACK_OPEN === 'false';

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: dartSass,
              sassOptions: {
                indentWidth: 2,
                outputStyle: 'expanded',
                includePaths: paths.sassPaths,
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    client: {
      overlay: {
        warnings: true,
        errors: true,
      },
    },
    devMiddleware: {
      writeToDisk: true,
    },
    host,
    port,
    hot: isHMREnabled,
    https: !isHttps
      ? false
      : {
        key: process.env.WEBPACK_HTTPS_KEY,
        cert: process.env.WEBPACK_HTTPS_CERT,
      },
    liveReload: true,
    open: isOpenBoolean
      ? process.env.WEBPACK_OPEN
      : {
        app: {
          name: process.env.WEBPACK_OPEN,
        },
      },
    proxy: {
      '/': {
        target: siteURL,
        changeOrigin: true,
        secure: false,
      },
    },
    static: false,
    watchFiles: paths.files,
  },
  devtool: 'inline-source-map',
};
