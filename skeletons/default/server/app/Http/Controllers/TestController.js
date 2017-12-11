/**
 * 测试控制器
 *
 * @author : sunkeysun
 */

import { Controller } from 'inventor'

export default class TestController extends Controller {
    test() {
        this.response.render()
    }

    test123() {
    }
}
