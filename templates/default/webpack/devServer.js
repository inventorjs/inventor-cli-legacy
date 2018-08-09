/**
 * react 开发服务器
 *
 * $author : sunkeysun
 */

import path from 'path'
import { WebpackDevServer } from 'inventor-dev'
import config from './config'

const buildMode = 'debug'
const localServer = config[buildMode].localServer
const localWeb = config[buildMode].localWeb
const basePath = path.resolve(__dirname, '..')
const publicPath = config[buildMode].publicPath

const devServer = new WebpackDevServer({ basePath, publicPath, localServer, localWeb, buildMode })

devServer.run()
