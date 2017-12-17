/**
 * web 应用程序核心
 *
 * @author : sunkeysun
 */

import lodash from '@vendor/lodash/lodash.custom'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import IException from '../Support/Base/IException'
import createRoot from '../Shared/webRoot.jsx'

export default class Kernel {
    _basePath = ''
    _AppComponent = null

    constructor(basePath, AppComponent) {
        this._basePath = basePath
        this._AppComponent = AppComponent
        this._registerGlobal()
    }

    _registerGlobal() {
        window.global = window

        lodash.extend(global, {
            IException,
            _: lodash,
            app: () => {
                return this
            },
        })
    }

    get sharedPath() {
        const targetPath = `${this._basePath}shared`
        return targetPath
    }

    run() {
        const initialState = global.__INITIAL_STATE__
        const App = this._AppComponent

        const appName = global.__APP_NAME__
        const appPath = `${this.sharedPath}apps/${appName}/`
        const rootReducer = require(`${appPath}reducers`).default
        const rootSaga = require(`${appPath}sagas`).default

        const RootComponent = createRoot({ App, rootReducer, rootSaga })

        return ReactDom.render(RootComponent, document.getElementById('__APP__'))
    }
}
