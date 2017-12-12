/**
 * 通用页面框架
 *
 * @author : sunkeysun
 */

import React from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'

export default function(props={}) {
    const {
        title='',
        keywords='',
        description='',
        css=[],
        js=[],
        body='',
        initialState={},
        appName='',
        AppComponent=null,
    } = props

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
                    _.map(css, (link) =>
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
                __html: renderToString(<AppComponent { ...initialState } />)
            } }></div>

            {
                _.map(js, (script) =>
                    <script type="text/javascript" src={ script }></script>
                )
            }
            </body>
        </html>
    )
}

