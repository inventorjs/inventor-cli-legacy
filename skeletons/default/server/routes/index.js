/**
 * 路由配置入口
 *
 * @author : sunkeysun
 */

import TestMiddleware from '@server/app/Middleware/TestMiddleware'
import TTMiddleware from '@server/app/Middleware/TTMiddleware'

import web from './web'

export default (router) => {
    router.group('/', web)
}
