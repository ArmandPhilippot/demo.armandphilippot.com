const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dartSass = require('sass');
const paths = require('./paths');

module.exports = {
  mode: 'production',
  devtool: false,
  optimization: {
    minimizer: [new CssMinimizerPlugin(), '...'],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer'],
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: dartSass,
              sassOptions: {
                indentWidth: 2,
                outputStyle: 'compressed',
                includePaths: paths.sassPaths,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
