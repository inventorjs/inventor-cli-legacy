/**
 * 应用入口
 *
 * @author : sunkeysun
 */

import React, { Component, Fragment } from 'react'
import { hot } from 'react-hot-loader'

@hot(module)
export default class App extends Component {
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
            <div style={ style }>Welcome, Inventor!</div>
        )
    }
}
