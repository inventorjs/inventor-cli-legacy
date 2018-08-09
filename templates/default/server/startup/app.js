/**
 * 启动脚本
 *
 * $author : sunkeysun
 */

import path from 'path'
import Kernel from '$server/app/http/Kernel'

process.on('uncaughtException', (e) => {
    console.error(e)
    process.exit(1)
})

const app = new Kernel(path.resolve(__dirname, '../..'))
app.run()
