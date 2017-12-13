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
    _AppComponent = null

    constructor(_AppComponent) {
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

    run() {
        const initialState = global.__INITIAL_STATE__
        const app = react.createElement(this._AppComponent, initialState)

        return ReactDom.render(app, document.getElementById('__APP__'))
    }
}
