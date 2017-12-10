/**
 * session 服务提供者
 *
 * @author : sunkeysun
 */

import Provider from '../Support/Base/Provider'
import session from 'koa-session'

export default class SessionProvider extends Provider {
    register() {
        const sessionConfig = app().config('session')
        let store = null
        switch (sessionConfig.store) {
            case 'redis':
                const redisConfig = _.get(sessionConfig, 'storeConfig.redis')
                store = new RedisStore(redisConfig)
                break
            default:
                store = null
                break
        }

        let targetConfig = _.pick(sessionConfig, ['key', 'maxAge', 'overwrite',
                                                'httpOnly', 'signed', 'rolling'])
        if (!!store) {
            targetConfig = _.extend(targetConfig, { store })
        }

        return _.partial(session, targetConfig)
    }
}
