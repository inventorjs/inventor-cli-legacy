/**
 * redis 服务提供者
 *
 * @author : sunkeysun
 */

import Provider from '../Support/Base/Provider'
import RedisDriver from '../Support/Drivers/RedisDriver'

export default class RedisProvider extends Provider {
    register() {
        const redisConfig = app().config('redis')
        const redis = new RedisDriver(redisConfig)
        return redis
    }
}
