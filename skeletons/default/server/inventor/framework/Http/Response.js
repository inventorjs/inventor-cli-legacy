/**
 * 基础响应控制器
 *
 * @author : sunkeysun
 */
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import IClass from '../Support/Base/IClass'
import { extendObject } from '../Support/helpers'
import HTML from '@server/views/common/HTML'

export default class Response extends IClass {
    _ctx = null

    _setters = [
    ]

    constructor(ctx) {
        super()

        this._ctx = ctx

        const resultObj = extendObject(ctx.response, this, this._setters)
        return resultObj
    }

    setHeader(field, value) {
        return this._ctx.response.set(field, value)
    }

    removeHeader(field) {
        return this._ctx.response.remove(field)
    }

    setCookie(key, value, options={}) {
        return this._ctx.cookies.set(key, value, options)
    }

    sendJson(data) {
        this.setHeader('content-type', 'application/json')

        const result = JSON.stringify(data)
        this._ctx.response.body = result
    }

    sendJsonp(data, callback='') {
        const cb = _.get(this._ctx.request.query, 'callback', callback)
        const jsonData = JSON.stringify(data)
        const result = `${cb}(${jsonData})`

        this.header('content-type', 'application/javascript')
        this._ctx.response.body = result
    }

    send(data) {
        this._ctx.response.body = data
    }

    render() {
        this.setHeader('content-type', 'text/html')
        this.send(renderToStaticMarkup(<HTML />))
    }
}
