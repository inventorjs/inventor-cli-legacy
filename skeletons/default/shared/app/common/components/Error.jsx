/**
 * 错误展示组件
 *
 * $author : sunkeysun
 */

import styles from '../styles/index.css'

import React, { Component } from 'react'

export default class extends Component {
    render() {
        const { code, msg='', detail='' } = this.props

        return (
            <div className={ styles.errorWrapper }>
                <p>{ code }</p>
                <p>{ msg }</p>
                <p className={ styles.errorDetail } dangerouslySetInnerHTML={ { __html: detail } } ></p>
            </div>
        )
    }
}
