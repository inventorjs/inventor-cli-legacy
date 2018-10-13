/**
 * 应用入口
 *
 * $author : sunkeysun
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import ErrorContainer from './containers/Error'

@connect((state) => state)
export default class extends Component {
    render() {
        const { routing, common, variables, error } = this.props

        return (
            <ErrorContainer
                { ...error }
            />
        )
    }
}
