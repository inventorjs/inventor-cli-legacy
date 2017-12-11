/**
 * redis session 存储驱动
 *
 * @author : sunkeysun
 */

import IClass from '../../Support/Base/IClass'
import RedisDriver from '../../Support/Drivers/RedisDriver'

import { serialize, unserialize } from '../helpers'

export default class RedisStore extends IClass {
    _redis = null

    constructor(redisConfig) {
        super()

        this._redis = new RedisDriver(redisConfig)
    }

    async get(sid, maxAge, { rolling }) {
        const data = await this._redis.get(sid)
        const resultData = unserialize(data)
        return resultData
    }

    async set(sid, sess, maxAge, { changed, rolling }) {
        return await this._redis.set(sid, serialize(sess), 'EX', Math.floor(maxAge/1000))
    }

    async destroy(sid) {
        return await this._redis.del(sid)
    }
}
