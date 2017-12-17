/**
 * 通用页面框架
 *
 * @author : sunkeysun
 */

import React from 'react'

export default function(props={}) {
    const {
        title='',
        keywords='',
        description='',
        initialState={},
        appName='',
        appContent='',
        viewsPath='',
    } = props

    const { commonJsList=[], commonCssList=[] } = require(`${viewsPath}/common`)
    const { jsList=[], cssList=[] } = require(`${viewsPath}/apps/${appName}`)

    const jsonInitialState = JSON.stringify(initialState)

    return (
        <html>
            <head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="keywords" content={ keywords } />
                <meta httpEquiv="description" content={ description } />
                <title>{ title }</title>
                {
                    _.map(commonCssList, (link) =>
                        <link href={ link } rel="stylesheet" media="screen" />
                    )
                }
                {
                    _.map(cssList, (link) =>
                        <link href={ link } rel="stylesheet" media="screen" />
                    )
                }
                <script dangerouslySetInnerHTML={ {
                    __html: `
                        window.__INITIAL_STATE__ = ${jsonInitialState}
                        window.__APP_NAME__ = '${appName}'
                    `
                } }></script>
            </head>
            <body>
            <div id="__APP__" dangerouslySetInnerHTML={ {
                __html: appContent
            } }></div>
            {
                _.map(commonJsList, (js, index) =>
                    <script key={ index } type="text/javascript" src={ js }></script>
                )
            }
            {
                _.map(jsList, (js, index) =>
                    <script key={ index } type="text/javascript" src={ js }></script>
                )
            }
            </body>
        </html>
    )
}

