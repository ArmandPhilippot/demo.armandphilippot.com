const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { DefinePlugin } = require('webpack');
const dotenv = require('dotenv').config();
const paths = require('./paths');

module.exports = {
  entry: {
    style: {
      import: paths.src.style,
      filename: 'js/style.js',
    },
    scripts: {
      import: paths.src.scripts,
      filename: 'js/app.js',
    },
  },
  output: {
    path: paths.dist,
    clean: true,
    hotUpdateChunkFilename: 'hmr/[id].[fullhash].hot-update.js',
    hotUpdateMainFilename: 'hmr/[runtime].[fullhash].hot-update.json',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: (img) => {
            const relativePath = img.filename;
            const filteredPath = relativePath.replace('src/', '');
            return filteredPath;
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: (font) => {
            const relativePath = font.filename;
            const filteredPath = relativePath.replace('src/', '');
            return filteredPath;
          },
        },
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: 'js/runtime',
    },
    splitChunks: {
      cacheGroups: {
        style: {
          type: 'css/mini-extract',
          name: '/css/style',
          chunks: (chunk) => chunk.name === 'style',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['mozjpeg', { progressive: true, quality: 75 }],
            ['optipng', { optimizationLevel: 5 }],
            // Svgo configuration here https://github.com/svg/svgo#configuration
            [
              'svgo',
              {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        removeTitle: false,
                        removeViewBox: false,
                      },
                    },
                  },
                  'removeDimensions',
                ],
              },
            ],
          ],
        },
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: paths.src.fonts, to: 'fonts', noErrorOnMissing: true },
        { from: paths.src.images, to: 'images', noErrorOnMissing: true },
      ],
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
      'process.env.ACKEE_DOMAIN': JSON.stringify(process.env.ACKEE_DOMAIN),
      'process.env.ACKEE_SITE_ID': JSON.stringify(process.env.ACKEE_SITE_ID),
    }),
  ],
  resolve: {
    fallback: {
      fs: false,
      path: false,
      os: false,
    },
  },
};
