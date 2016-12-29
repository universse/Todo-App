const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const paths = require('./paths')

process.env.NODE_ENV = 'development'

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    paths.mainJs
  ],
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.html
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('main.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!postcss!sass')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css')
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  postcss () {
    return [autoprefixer]
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './src/components',
      './src/api',
      './src/redux',
      './src/firebase'
    ],
    alias: {
      applicationStyle: paths.mainScss
    }
  },
  output: {
    filename: 'index.js',
    path: paths.build
  }
}
