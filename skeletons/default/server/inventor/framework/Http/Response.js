/**
 * 基础响应控制器
 *
 * @author : sunkeysun
 */
import React from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'

import IClass from '../Support/Base/IClass'
import { extendObject } from '../Support/helpers'
import HTML from '../Shared/HTML'
import createRoot from '../Shared/serverRoot.jsx'

export default class Response extends IClass {
    _ctx = null

    _setters = [
    ]

    _locals = {}

    get locals() {
        return this._locals
    }

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
        return this._ctx.response.body = result
    }

    send(data) {
        return this._ctx.response.body = data
    }

    render404() {
        return this.renderError(404)
    }

    render500() {
        return this.renderError(500)
    }

    render403() {
        return this.renderError(403)
    }

    renderError(code, initialState={}) {
        const appPath = `${app().sharedPath}common/errors/${code}`
        const App = require(appPath).default
        const appName = 'common'

        return this._render({ App, appName, initialState })
    }

    _render({ App, appName='', initialState={}, rootReducer=()=>{}, rootSaga={} }) {
        const appConfig = app().config('app')
        let appContent = ''

        if (!!appConfig.ssr) {
            const RootComponent = createRoot({ App, rootReducer, rootSaga })
            appContent = renderToString(<RootComponent { ...initialState } />)
        }

        const props = {
            ssr: appConfig.ssr,
            title: _.get(this.locals, 'PAGE_TITLE', ''),
            keywords: _.get(this.locals, 'PAGE_KEYWORDS', ''),
            description: _.get(this.locals, 'PAGE_DESCRIPTION', ''),
            initialState: initialState,
            appName: appName,
            appContent: appContent,
            viewsPath: app().viewsPath,
        }
        return this.send(renderToStaticMarkup(<HTML { ...props } />))
    }

    render(appName, initialState={}) {
        this.setHeader('content-type', 'text/html')

        const appPath = `${app().sharedPath}apps/${appName}/`
        const App = require(`${appPath}App`).default

        const rootReducer = require(`${appPath}reducers`).default
        const rootSaga = require(`${appPath}sagas`).default

        return this._render({ App, appName, rootReducer, rootSaga })
    }
}
