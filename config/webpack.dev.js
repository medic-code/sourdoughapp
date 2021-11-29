const webpack = require('webpack');
const { merge } = require('webpack-merge')

const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    static: paths.public,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.css%/,
        use: ['style-loader',{
          loader: 'css-loader',
          options: { sourceMap: true },
        }]
      }
    ]
  }
})