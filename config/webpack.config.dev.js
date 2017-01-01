const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const envFile = require('node-env-file')
const paths = require('./paths')

process.env.NODE_ENV = 'development'

envFile(paths.devEnv)

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    paths.mainJs
  ],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo App',
      inject: true,
      template: paths.html
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'API_KEY': JSON.stringify(process.env.API_KEY),
        'AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
        'DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
        'STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
        'MESSAGING_SENDER_ID': JSON.stringify(process.env.MESSAGING_SENDER_ID)
      }
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
      './src/api',
      './src/components',
      './src/firebase',
      './src/redux'
    ],
    alias: {
      applicationStyle: paths.mainScss
    }
  },
  output: {
    filename: 'index.js',
    path: paths.build
  },
  devServer: {
    historyApiFallback: true
  }
}
