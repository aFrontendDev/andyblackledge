
// variables
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'app.html',
  inject: 'body'
});
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const PROD = JSON.parse(process.env.PROD_ENV || '0');

// webpack config
module.exports = function(env) {
  const PROD = env === 'prod' ? true : false;

  return {
    entry: ['babel-polyfill', './app/index.js'],
    output: {
      path: path.resolve('dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './dist/',
      compress: true,
      port: 8080,
      index: 'app.html'
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx$/, loader: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ }
      ]
    },
    plugins: PROD ? [
      new CopyWebpackPlugin([
        {from:'./_temp',to:'_temp'}
      ]),
      HtmlWebpackPluginConfig,
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ] : [
      new CopyWebpackPlugin([
        {from:'./_temp',to:'_temp'}
      ]),
      HtmlWebpackPluginConfig
    ]
  };
};