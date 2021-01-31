'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = {
  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html',
    }),
  ],
  devtool: 'inline-source-map',
};

module.exports = development;