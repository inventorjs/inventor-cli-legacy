/**
 * webpack 配置文件
 *
 * @author : sunkeysun
 */

import path from 'path'
import WebpackConfigure from 'inventor/web/webpack'

const basePath = path.join(__dirname, '../../')
const publicPath = '//img.test.com/'
const buildMode = 'debug'
const configure = new WebpackConfigure({ basePath, publicPath, buildMode })
const webpackConfig = configure.getTemplate()

console.log(webpackConfig)

module.exports = webpackConfig
