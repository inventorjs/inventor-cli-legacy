/**
 * 基础请求类
 *
 * @author : sunkeysun
 */

import IClass from '../Support/Base/IClass'

export default class Request extends IClass {
    _proxyProps = [
        'headers',
        'method',
        'url',
        'originalUrl',
        'origin',
        'href',
        'path',
        'query',
        'querystring',
        'host',
        'hostname',
        'fresh',
        'stale',
        'socket',
        'protocol',
        'secure',
        'ip',
        'ips',
        'subdomains',
    ]

    _proxyFuns = [
        'is',
        'accepts',
        'acceptsEncodings',
        'acceptsCharsets',
        'acceptsLanguages',
    ]

    _extendProps = [
        'params',
        'cookies',
        'session',
    ]

    _extendFuns = [
        'header',
        'cookie',
    ]

    _ctx = null

    constructor(ctx) {
        super()

        this._ctx = ctx
        const proxy = this._getProxy()

        return proxy
    }

    header(name) {
        return this._ctx.request.get(name)
    }

    cookie(key) {
        return this._ctx.cookies.get(key)
    }

    cookies() {
        return {}
    }

    get params() {
        return this._ctx.params
    }

    get session() {
        return this._ctx.session
    }

    _getProxy() {
        const req = this._ctx.request

        const proxyHandler = {
            get: (target, prop) => {
                if (!!~this._extendFuns.indexOf(prop)) {
                    return (...args) => {
                        return this[prop].apply(this, args)
                    }
                } else if (!!~this._extendProps.indexOf(prop)) {
                    return this[prop]
                } else if (!!~this._proxyFuns.indexOf(prop)) {
                    return (...args) => {
                        return Reflect.apply(target[prop], target, args)
                    }
                } else if (!!~this._proxyProps.indexOf(prop)) {
                    return target[prop]
                } else {
                    throw new IException(`${prop} not exists.`)
                }
            }
        }

        return new Proxy(req, proxyHandler)
    }
}
