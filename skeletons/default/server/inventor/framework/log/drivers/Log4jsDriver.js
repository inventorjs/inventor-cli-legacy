/**
 * log4js 日志驱动
 *
 * @author : sunkeysun
 */

import Log4js from 'log4js'
import IClass from '../../support/base/IClass'

export default class Log4jsDriver extends IClass {
    constructor(logConfig) {
        super()

        Log4js.configure(logConfig)

        return Log4js.getLogger
    }
}
