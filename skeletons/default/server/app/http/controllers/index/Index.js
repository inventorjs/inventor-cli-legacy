/**
 * 站点入口控制器
 *
 * @author : sunkeysun
 */

import Controller from '../Controller'

export default class IndexController extends Controller {
    async index() {
        this.response.renderApp('index', { common: { staffname: 'sunkeysun' } })
    }
}
