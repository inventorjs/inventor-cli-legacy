/**
 * redis 驱动
 *
 * @author : sunkeysun
 */

import Redis from 'ioredis'

import Driver from '../Base/Driver'

export default class RedisDriver extends Driver {
    _redis = null

    constructor(redisConfig) {
        super()

        if (redisConfig.mode === 'cluster') {
            this._redis = new Redis.Cluster(redisConfig.servers)
        } else {
            this._redis = new Redis(redisConfig.servers[0])
        }

        this._redis.on('connect', () => {
            this.logger.debug('redis connect')
        })
        this._redis.on('ready', () => {
            this.logger.debug('redis ready')
        })
        this._redis.on('error', (err) => {
            this.logger.debug(err)
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
