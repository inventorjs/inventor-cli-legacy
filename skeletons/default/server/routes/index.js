/**
 * 路由配置入口
 *
 * @author : sunkeysun
 */

import web from './web'

export default (router) => {
    router.group('/', web)
}
