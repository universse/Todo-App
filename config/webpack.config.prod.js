const webpack = require('webpack')
const cssnano = require('cssnano')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const envFile = require('node-env-file')
const paths = require('./paths')

process.env.NODE_ENV = 'production'

envFile(paths.prodEnv)

module.exports = {
  bail: true,
  entry: [
    paths.mainJs
  ],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo App',
      inject: true,
      template: paths.html,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeEmptyAttributes: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        sortAttributes: true,
        sortClassName: true,
        useShortDoctype: true
      }
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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      },
      unused: true,
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
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
  postcss: [
    cssnano({
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions']
      },
      discardComments: {
        removeAll: true
      },
      discardUnused: false,
      mergeIdents: false,
      reduceIdents: false,
      safe: true,
      sourcemap: true
    })
  ],
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './src/api',
      './src/AppContainer',
      './src/AppHeader',
      './src/AppLayout',
      './src/AppRouter',
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
  }
}
