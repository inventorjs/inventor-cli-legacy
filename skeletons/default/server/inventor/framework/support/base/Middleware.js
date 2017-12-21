/**
 * 基础中间件
 *
 * @author : sunkeysun
 */

import IClass from './IClass'

export default class Middleware extends IClass {
    async handle() {
        throw new IException('milldeware must imply handler function.')
    }
}
