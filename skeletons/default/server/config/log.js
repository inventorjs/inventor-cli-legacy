/**
 * 日志配置文件
 *
 * @author : sunkeysun
 */

import path from 'path'

export default {
    driver: 'log4js',
    config: {
        log4js: {
            appenders: {
                console: {
                    type: 'console',
                },
                dateFile: {
                    type: 'dateFile',
                    filename: path.join(__dirname, '../../logs/'),
                    alwaysIncludePattern: true,
                    pattern: 'yyyy_MM_dd_hh.log',
                }
            },
            categories: {
                default: { appenders: ['dateFile'], level: 'debug' },
            },
        },
    },
}
