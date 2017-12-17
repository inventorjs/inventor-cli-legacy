/**
 * webpack 配置文件
 *
 * @author : sunkeysun
 */

import path from 'path'
import { WebpackConfigure } from 'inventor/web'

const basePath = path.join(__dirname, '../../')
const publicPath = '//img.test.com/'
const configure = new WebpackConfigure({ basePath, publicPath })
const webpackConfig = configure.getTemplate()

module.exports = webpackConfig
