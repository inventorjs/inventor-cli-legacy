/**
 * web 路由入口
 *
 * @author : sunkeysun
 */

import test from './test'

export default (router) => {
    router.group('/hello', test)
}
