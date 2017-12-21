/**
 * 日志服务提供者
 *
 * @author : sunkeysun
 */

import Provider from '../support/base/Provider'
import Log4jsDriver from './drivers/Log4jsDriver'

export default class LogProvider extends Provider {
    register() {
        const logConfig = app().config('log')

        let logger = null
        switch (logConfig.driver) {
            case 'log4js':
                const targetConfig = _.get(logConfig, 'config.log4js', {})
                logger = new Log4jsDriver(targetConfig)
                break
            default:
                logger = null
        }

        return logger
    }
}
