var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('src/css/main.css', {
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
    alias: {
      App: 'src/components/App.js',
      SearchTodo: 'src/components/SearchTodo.js',
      TodoList: 'src/components/TodoList.js',
      Todo: 'src/components/Todo.js',
      AddTodo: 'src/components/AddTodo.js',
      applicationStyle: 'src/scss/main.scss'
    }
  },
  output: {
    filename: 'index.js',
    path: './src'
  }
}
