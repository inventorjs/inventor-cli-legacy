/**
 * redis 驱动
 *
 * @author : sunkeysun
 */

import Redis from 'ioredis'

import IClass from '../Base/IClass'

export default class RedisDriver extends IClass {
    _redis = null

    constructor(redisConfig) {
        super()

        if (redisConfig.mode === 'cluster') {
            this._redis = new Redis.Cluster(redisConfig.servers)
        } else {
            this._redis = new Redis(redisConfig.servers[0])
        }

        this._redis.on('connect', () => {
            app().logger().debug('redis connect')
        })
        this._redis.on('ready', () => {
            app().logger().debug('redis ready')
        })
        this._redis.on('error', (err) => {
            app().logger().debug(err)
        })
    }

    async get(...args) {
        return await Reflect.apply(this._redis.get, this._redis, args)
    }

    async set(...args) {
        return await Reflect.apply(this._redis.set, this._redis, args)
    }

    async del(...args) {
        return await Reflect.apply(this._redis.del, this._redis, args)
    }
}
