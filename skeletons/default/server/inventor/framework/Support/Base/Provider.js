/**
 * 基础服务器提供者
 *
 * @author : sunkeysun
 */

import IClass from './IClass'

export default class Provider extends IClass {
    constructor() {
        super()

        if (!!_.isFunction(app().logger)) {
            this.logger = app().logger('provider')
        }
    }

    register() {
    }
}
