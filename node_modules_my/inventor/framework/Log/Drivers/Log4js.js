/**
 * log4js 日志驱动
 *
 * @author : sunkeysun
 */

import Log4js from 'log4js'

export default class Log4js extends IClass {
    constructor(logConfig) {
        const log4jsConfig = {
            appenders: {
                type: _.get(logConfig, 'type', 'dateFile'),
                filename: _.get(logConfig, '')
            },
        }
    }
}
