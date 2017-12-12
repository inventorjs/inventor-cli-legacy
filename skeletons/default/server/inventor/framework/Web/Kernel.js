/**
 * web 应用程序核心
 *
 * @author : sunkeysun
 */

import lodash from 'lodash'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import IException from '../Support/Base/IException'

export default class Kernel {
    _basePath = ''

    constructor(basePath) {
        this._basePath = basePath

        this._registerGlobal()
    }

    get basePath() {
        return this._basePath
    }

    get sharedPath() {
        const targetPath = `${this.basePath}/shared/`
        return targetPath
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

    _getEntryComponent(entryName) {
        const componentPath = `${this.sharedPath}/apps/${entryName}`
        const entryComponent = require(componentPath).default

        return entryComponent
    }

    run() {
        const initialState = global.__INITIAL_STATE__
        const moduleName = global.__MODULE_NAME__
        const App = this._getEntryComponent(moduleName)
        const entryComponent = react.createElement(App, initialState)

        return ReactDom.render(entryComponent, document.body)
    }
}
