/**
 * react 开发服务器
 *
 * @author : sunkeysun
 */

import path from 'path'
import { DevServer } from 'inventor/web/webpack'
import config from './config'

const buildMode = 'debug'
const serverConfig = config[buildMode].devServer
const webServer = config[buildMode].webServer
const basePath = path.join(__dirname, '../../')
const publicPath = config[buildMode].publicPath

const devServer = new DevServer({ basePath, publicPath, serverConfig, webServer, buildMode })

devServer.run()
