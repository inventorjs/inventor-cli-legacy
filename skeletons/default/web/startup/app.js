/**
 * 应用启动文件
 *
 * @author :sunkeysun
 */

import path from 'path'
import WebKernel from '../app/Kernel'

const app = new WebKernel(path.join(__dirname, '../../'))
app.run()
