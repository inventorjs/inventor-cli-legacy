/**
 * 启动脚本
 *
 * @author : sunkeysun
 */

import path from 'path'
import Application from '../inventor'

const app = new Application(path.join(__dirname, '../'))

app.run()
