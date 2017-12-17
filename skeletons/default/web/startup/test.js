/**
 * 应用启动文件
 *
 * @author :sunkeysun
 */

import path from 'path'
import WebKernel from 'inventor/web'
const App = require('../../shared/apps/test/App.jsx').default
const basePath = path.join(__dirname, '../../')

const app = new WebKernel(basePath, App, appName)
app.run()
