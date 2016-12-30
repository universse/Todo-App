const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolvePath = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  build: resolvePath('build'),
  public: resolvePath('public'),
  html: resolvePath('public/index.html'),
  src: resolvePath('src'),
  mainJs: resolvePath('src/main.js'),
  mainScss: resolvePath('src/styles/main.scss'),
  devEnv: resolvePath('config/development.env'),
  prodEnv: resolvePath('config/production.env')
}
