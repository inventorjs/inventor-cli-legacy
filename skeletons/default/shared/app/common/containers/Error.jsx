/**
 * 错误容器
 *
 * $author : sunkeysun
 */

import React, { Component, Fragment } from 'react'
import ErrorComponent from '../components/Error'

export default class extends Component {
    _getMsg(code) {
        switch(code) {
            case 403:
                return 'Forbidden'
            case 404:
                return 'Not Found'
            case 500:
                return 'Internal Server Error'
        }
    }

    render() {
        const { code, detail='' } = this.props

        const msg = this._getMsg(code)

        return (
            <Fragment>
                <ErrorComponent code={ code } msg={ msg } detail={ detail } />
            </Fragment>
        )
    }
}
