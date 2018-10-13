/**
 * webpack 通用配置文件
 *
 * $author : sunkeysun
 */

import _ from 'lodash'

const LOCAL_WEB_PORT = _.get(process.env, 'LOCAL_WEB_PORT', 9099)
const LOCAL_SERVER_PORT = _.get(process.env, 'LOCAL_SERVER_PORT', 9199)
const LOCAL_HOST = '127.0.0.1'

export default {
    debug: {
        localWeb: {
            host: LOCAL_HOST,
            port: LOCAL_WEB_PORT,
        },
        localServer: {
            host: LOCAL_HOST,
            port: LOCAL_SERVER_PORT,
        },
        publicPath: `http://${LOCAL_HOST}:${LOCAL_WEB_PORT}/static`,
    },
    release: {
        publicPath: '/static',
    },
}
