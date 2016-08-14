var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.json$|\.css$/, loader: "file" }
    ]
  },

  plugins:[
    new CopyWebpackPlugin([
        {from: __dirname + '/app/questions.json' }
      ]
    ),
  	new HtmlWebpackPlugin({
  	  template: __dirname + '/app/index.html',
  	  filename: 'index.html',
  	  inject: 'body'
  	}), 
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ]
};