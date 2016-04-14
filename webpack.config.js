var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  devServer: {
    //hot: true
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          cacheDirectory: true
        }
      }
    ]
  },
};