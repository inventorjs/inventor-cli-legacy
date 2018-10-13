/**
 * webpack 通用配置文件
 *
 * $author : sunkeysun
 */

import _ from 'lodash'

const WEB_PORT = _.get(process.env, 'WEB_PORT', 9099)
const SERVER_PORT = _.get(process.env, 'SERVER_PORT', 9199)
const LOCALHOST = _.get(process.env, 'LOCALHOST', '127.0.0.1')

export default {
    debug: {
        localWeb: {
            host: LOCALHOST,
            port: WEB_PORT,
        },
        localServer: {
            host: LOCALHOST,
            port: SERVER_PORT,
        },
        publicPath: `http://${LOCALHOST}:${WEB_PORT}/static`,
    },
    release: {
        publicPath: '/static',
    },
}
