/**
 * 基础请求类
 *
 * @author : sunkeysun
 */

import IClass from '../Support/Base/IClass'
import { extendObject } from '../Support/helpers'

export default class Request extends IClass {
    _ctx = null

    _setters = []

    constructor(ctx) {
        super()

        this._ctx = ctx

        const resultObj = extendObject(ctx.request, this, this._setters)
        return resultObj
    }

    getHeader(name) {
        return this._ctx.request.get(name)
    }

    getCookie(key) {
        return this._ctx.cookies.get(key)
    }
}
