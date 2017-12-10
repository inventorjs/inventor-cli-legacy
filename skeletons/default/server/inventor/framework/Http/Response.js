/**
 * 基础响应控制器
 *
 * @author : sunkeysun
 */

import IClass from '../Support/Base/IClass'

export default class Response extends IClass {
    _proxyProps = [
        'body',
        'status',
        'message',
        'length',
        'type',
        'lastModified',
        'etag',
    ]

    _proxyFuns = [
        'headerSent',
        'redirect',
        'attachment',
        'append',
        'remove',
    ]

    _extendFuns = [
        'header',
        'headers',
        'cookie',
        'cookies',
        'send',
    ]

    _ctx = null

    constructor(ctx) {
        super()

        this._ctx = ctx
        const proxy = this._getProxy()

        return proxy
    }

    header(name, value) {
        this._ctx.response.set(name, value)
    }

    headers(headers) {
        _.each(headers, (val, key) => {
            this._ctx.response.set(key, val)
        })
    }

    cookie(key, value, options={}) {
        this._ctx.cookies.set(key, value, options)
    }

    cookies(cookies) {
        _.each(cookies, ({ key, val, options }) => {
            this._ctx.cookies.set(key, val, options)
        })
    }

    json(data) {
        this.header('content-type', 'application/json')

        const result = JSON.stringify(data)
        this.body = result
    }

    jsonp(data, callback='') {
        const cb = _.get(this._ctx.request.query, 'callback', callback)
        const jsonData = JSON.stringify(data)
        const result = `${cb}(${jsonData})`

        this.header('content-type', 'application/javascript')
        this.body = result
    }

    _getProxy() {
        const res = this._ctx.response
        const proxyHandler = {
            get: (target, prop) => {
                if (!!~this._extendFuns.indexOf(prop)) {
                    return (...args) => {
                        return this[prop].apply(this, args)
                    }
                } else if (!!~this._proxyFuns.indexOf(prop)) {
                    return (...args) => {
                        return Reflect.apply(target[prop], target, args)
                    }
                } else {
                    throw new IException(`${prop} not exists.`)
                }
            },
            set: (target, prop, value) => {
                if (!!~this._proxyProps.indexOf(prop)) {
                    return target[prop] = value
                } else if (!!~this._extendProps.indexOf(prop)) {
                    return this[prop]
                } else {
                    throw new IException(`${prop} not exists.`)
                }
            }
        }

        return new Proxy(res, proxyHandler)
    }
}
