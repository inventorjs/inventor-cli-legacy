/**
 * 日志配置文件
 *
 * @author : sunkeysun
 */

import path from 'path'

const logPath = path.resolve(__dirname, '../../logs')

export default {
    mode: 'console',   // console | single | dateFile | levelDateFile | levelDirDateFile
    logPath: logPath,
    pattern: 'yyyyMMdd.log'
}
