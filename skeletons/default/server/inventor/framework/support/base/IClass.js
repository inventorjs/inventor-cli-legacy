/**
 * 基础类
 *
 * @author : sunkeysun
 */

export default class IClass {
    constructor({ logger } = { logger : true}) {
        if (!!_.isFunction(app().logger)) {
            this.logger = app().logger()
        }
    }
}
