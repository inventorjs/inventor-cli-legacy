/**
 * 基础响应控制器
 *
 * @author : sunkeysun
 */
import React from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'

import IClass from '../Support/Base/IClass'
import { extendObject } from '../Support/helpers'
import HTML from '@server/views/HTML'

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

    _getAppComponent(appName) {
        const appPath = `${app().sharedPath}apps/${appName}/App`
        const AppComponent = require(appPath).default
        return AppComponent
    }

    render(appName, initialState) {
        this.setHeader('content-type', 'text/html')
        const props = {
            title: '页面标题',
            keywords: '页面关键词',
            description: '页面描述',
            css: [],
            js: [],
            initialState: {xxx:1},
            appName: appName,
            AppComponent: this._getAppComponent(appName),
        }
        this.send(renderToStaticMarkup(<HTML { ...props } />))
    }
}
