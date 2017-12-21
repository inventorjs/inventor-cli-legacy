/**
 * web 应用程序核心
 *
 * @author : sunkeysun
 */

import lodash from 'lodash'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import IException from '../support/base/IException'
import createRoot from '../shared/webRoot.jsx'

export default class Kernel {
    static get DefaultVendor() {
        return [
            'lodash',
            'react',
            'react-dom',
            'react-router',
            'react-router-config',
            'react-router-dom',
            'redux',
            'react-redux',
            'redux-saga',
        ]
    }

    static registerGlobal() {
        if (window.global) {
            return false
        }

        window.global = window

        lodash.extend(global, {
            IException,
            _: lodash,
            __SIDE__: 'web',
        })
    }

    static run({ App, rootReducer, rootSaga }) {
        const initialState = global.__INITIAL_STATE__
        const ssr = global.__SSR__

        const RootComponent = createRoot({ App, rootReducer, rootSaga })

        let render = ReactDom.render
        if (!!ssr) {
            render = ReactDom.hydrate
        }

        return render(<RootComponent { ...initialState } />, document.getElementById('__APP__'))
    }
}

Kernel.registerGlobal()
