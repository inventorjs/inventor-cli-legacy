/**
 * webpack 配置文件
 *
 * $author : sunkeysun
 */

import _ from 'lodash'

const LOCAL_WEB_PORT = _.get(process.env, 'LOCAL_WEB_PORT', 9099)
const LOCAL_SERVER_PORT = _.get(process.env, 'LOCAL_SERVER_PORT', 9199)

const config = {
    debug: {
        localWeb: {
            host: '127.0.0.1',
            port: LOCAL_WEB_PORT,
        },
        localServer: {
            host: '127.0.0.1',
            port: LOCAL_SERVER_PORT,
        },
    },
    release: {
        publicPath: '/static',
    },
}

config.debug.publicPath = `http://${config.debug.localWeb.host}:${config.debug.localWeb.port}/static`

export default config
