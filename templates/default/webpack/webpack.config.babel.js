/**
 * webpack 配置文件
 *
 * $author : sunkeysun
 */

import path from 'path'
import { WebpackConfigure } from 'inventor-dev'
import config from './config'

const buildMode = process.env.NODE_ENV === 'local' ? 'debug' : 'release'

const publicPath = config[buildMode].publicPath

const basePath = path.resolve(__dirname, '..')
const configure = new WebpackConfigure({ basePath, publicPath, buildMode })
const webpackConfig = configure.getTemplate()

module.exports = webpackConfig
