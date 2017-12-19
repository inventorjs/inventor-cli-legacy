/**
 * webpack 配置文件
 *
 * @author : sunkeysun
 */

import path from 'path'
import WebpackConfigure from 'inventor/web/webpack'
import config from './config'

const buildMode = process.env.buildMode === 'release' ? 'release' : 'debug'

const publicPath = config[buildMode].publicPath

const basePath = path.join(__dirname, '../../')
const configure = new WebpackConfigure({ basePath, publicPath, buildMode })
const webpackConfig = configure.getTemplate()

module.exports = webpackConfig
