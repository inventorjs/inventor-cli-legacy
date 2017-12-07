/**
 * 日志配置文件
 *
 * @author : sunkeysun
 */

import

export default {
    driver: 'log4js',
    config: {
        log4js: {
            appenders: {
                type: 'dateFile',
                filename: path.join(__dirname, '../logs/', 'log'),
                absolute: true,
                pattern: 'yyyy-MM-dd-hh',
            },
            categories: {
                default: { appenders: ['dateFile'], level: 'debug' },
            },
        },
    },
}
