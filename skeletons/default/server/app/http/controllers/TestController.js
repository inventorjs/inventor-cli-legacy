/**
 * 测试控制器
 *
 * @author : sunkeysun
 */

import { Controller } from 'inventor'

export default class TestController extends Controller {
    test() {
        this.response.locals.PAGE_TITLE = '我的标题'
        this.response.locals.PAGE_KEYWORDS = '我的关键词'
        this.response.locals.PAGE_DESCRIPTION = '我的描述'

        return this.response.render('test')
    }
}
