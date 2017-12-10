/**
 * 测试控制器
 *
 * @author : sunkeysun
 */

import { Controller } from 'inventor'

export default class TestController extends Controller {
    test() {
        this.response.header('hello', 'world')
        this.response.status = 500
        this.response.body = 'te123'
    }

    test123() {
        this.request.session.visit = Date.now()
        this.response.body = this.request.session
    }
}
