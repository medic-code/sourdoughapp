const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['react-hot-loader/patch',paths.src + '/index.js'],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, 
        type: 'asset/resource' 
      },
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, 
        type: 'asset/inline' },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Sourdough Timer',
      template: paths.src + '/index.html',
      filename: 'index.html',
      inject: 'body',
    })
  ],
  resolve: {
    modules: [paths.src,'node_modules'],
    extensions: ['.js','.jsx'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}