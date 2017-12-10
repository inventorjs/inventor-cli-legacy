/**
 * redis session 存储驱动
 *
 * @author : sunkeysun
 */

import IClass from '../Support/Base/IClass'
import ioredis from 'ioredis'

export default class RedisStore extends IClass {
    constructor(redisConfig) {

    }

    get(key, maxAge, { rolling }) {

    }

    set(key, sess, maxAge, { rolling, changed }) {

    }

    destroy(key) {

    }
}
