/**
 * 应用配置
 *
 * @author : sunkeysun
 */

import webpackConfig from '$webpack/config'

const localWeb = webpackConfig.debug.localWeb

export default {
    ssr: true,
    keys: [ 'example' ],
    server: {
        host: '0.0.0.0',
        port: _.get(process.env, 'SERVER_PORT', 9199),
    },
    timeout: 60000,
    noHash: true,
    webHost: `http://${localWeb.host}:${localWeb.port}`,
}
