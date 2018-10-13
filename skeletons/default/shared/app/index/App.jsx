/**
 * 应用入口
 *
 * @author : sunkeysun
 */

import React, { Component, Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import { hot } from 'react-hot-loader'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Com from '#shared/common'

const routes = [
    {
        path: '/',
        exact: true,
        component: Com,
    },
    {
        path: '/about',
        exact: true,
        component: (props) => {
            console.log(props)
            return <div>about</div>
        },
    },
]

@hot(module)
@inject('store')
@observer
export default class App extends Component {
    handleClick() {
        alert(1)
    }

    componentWillMount() {

    }

    handlePlus() {
        this.props.store.common.addName('x')
    }

    render() {
        const style = {
            width: 500,
            height: 200,
            lineHeight: '200px',
            color: '#666',
            background: '#eee',
            textAlign: 'center',
            fontSize: 40,
            border: '1px solid #ccc',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginLeft: -250,
            marginTop: -100,
        }
        return (
            <div style={ style }>
            { renderRoutes(routes) }
            <Link to="/about">about</Link>
            <Link to={{
                pathname: '/?a=1',
                state: { isLink: true },
            }}>index</Link>
            <div>{ this.props.store.common.staffname }</div>
            <button onClick={ this.handlePlus.bind(this) }>加</button>
            </div>
        )
    }
}
