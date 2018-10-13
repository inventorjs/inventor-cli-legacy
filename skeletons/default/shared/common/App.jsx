/**
 * 通用模块入口
 *
 * @author : sunkeysun
 */

import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'
import { renderRoutes } from 'react-router-config'

@hot(module)
export default class Com extends Component {
    componentDidMount() {
        console.log('mount')
    }

    handleClick() {
        alert('xxxo')
    }
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <div onClick={ this.handleClick.bind(this) }>coxxxon</div>
                { renderRoutes(this.props.route.routes) }
            </Fragment>
        )
    }
}
