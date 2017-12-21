/**
 * store 配置
 *
 * @author : sunkeysun
 */

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

export default (rootReducer, rootSaga) => {
    const sagaMiddleware = createSagaMiddleware()
    const middleware = applyMiddleware(sagaMiddleware)

    return (initialState={}) => {
        return createStore(
            rootReducer,
            initialState,
            middleware
        )

        sagaMiddleware.run(rootSaga)
    }
}
