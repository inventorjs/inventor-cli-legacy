/**
 * 应用入口
 *
 * @author : sunkeysun
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import configureStore from './store/configureStore'

export default ({ App, rootReducer=()=>{}, rootSaga={} }) => {
    return (initialState) => {
        const store = configureStore(rootReducer, rootSaga)(initialState)

        return (
            <Provider store={ store }>
                <Router history={ browserHistory } >
                    <App />
                </Router>
            </Provider>
        )
    }
}
