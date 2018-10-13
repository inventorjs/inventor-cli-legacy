/**
 * webpack 配置文件
 *
 * $author : sunkeysun
 */

import path from 'path'
import _ from 'lodash'
import { WebpackConfigure } from 'inventor-dev'
import config from './config/common'

const buildMode = 'release'
const buildModules = _.get(process.env, 'BUILD_MODULES', '').split('&')

const publicPath = config[buildMode].publicPath

const basePath = path.resolve(__dirname, '..')
const configure = new WebpackConfigure({ basePath, publicPath, buildMode, buildModules })
const webpackConfig = configure.getTemplate()

module.exports = webpackConfig
