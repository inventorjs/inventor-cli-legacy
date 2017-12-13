/**
 * 应用启动文件
 *
 * @author :sunkeysun
 */

import path from 'path'
import { WebKernel } from 'inventor/web'
const AppComponent = require('@shared/apps/test/App.jsx').default

const app = new WebKernel(AppComponent)
app.run()
