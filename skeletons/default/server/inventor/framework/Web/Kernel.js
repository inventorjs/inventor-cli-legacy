/**
 * web 应用程序核心
 *
 * @author : sunkeysun
 */

import lodash from 'lodash'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import IException from '../Support/Base/IException'
import createRoot from '../Shared/webRoot.jsx'

export default class Kernel {
    static registerGlobal() {
        window.global = window

        lodash.extend(global, {
            IException,
            _: lodash,
            app: () => {
                return this
            },
            __SIDE__: 'web',
        })
    }

    static run({ App, rootReducer, rootSaga }) {
        const initialState = global.__INITIAL_STATE__

        const RootComponent = createRoot({ App, rootReducer, rootSaga })

        return ReactDom.hydrate(<RootComponent { ...initialState } />, document.getElementById('__APP__'))
    }
}

Kernel.registerGlobal()
