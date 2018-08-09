/**
 * 站点入口控制器
 *
 * @author : sunkeysun
 */

import Controller from '../Controller'

export default class IndexController extends Controller {
    index() {
        return this.response.renderApp('index')
    }
}
