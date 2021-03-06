var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');

config.output = {
  filename: '[name].bundle.js',
  publicPath: '/',
  path: path.resolve(__dirname, 'src')
};

config.plugins = config.plugins.concat([

  // HMR updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin()
]);

module.exports = config;
