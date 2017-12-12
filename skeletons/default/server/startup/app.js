/**
 * 启动脚本
 *
 * @author : sunkeysun
 */

import path from 'path'
import Kernel from '@server/app/Http/Kernel'

const app = new Kernel(path.join(__dirname, '../../'))
app.run()
