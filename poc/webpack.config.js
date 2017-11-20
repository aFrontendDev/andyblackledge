
// variables
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './app/index.html',
  filename: 'index.html',
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
    entry: ['babel-polyfill', './app/index.js', './assets/_styles/main.scss'],
    output: {
      path: path.resolve('dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
      loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        { test: /\.jsx$/, loader: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ },
        { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'file-loader', exclude: /node_modules/ },
        { // regular css files
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        },
        { // scss files
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ]
        }
      ]
    },
    plugins: PROD ? [
      new CopyWebpackPlugin([
        {from:'./assets/images',to:'images'},
        {from:'./assets/plugins',to:'plugins'},
        {from:'./_temp',to:'_temp'}
      ]),
      HtmlWebpackPluginConfig,
      new ExtractTextPlugin({ // define where to save the file
        filename: 'dist/[name].styles.css',
        allChunks: true,
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ] : [
      new CopyWebpackPlugin([
        {from:'./assets/images',to:'images'},
        {from:'./assets/plugins',to:'plugins'},
        {from:'./_temp',to:'_temp'}
      ]),
      HtmlWebpackPluginConfig,
      new ExtractTextPlugin({ // define where to save the file
        filename: 'dist/[name].styles.css',
        allChunks: true,
      })
    ]
  };
};