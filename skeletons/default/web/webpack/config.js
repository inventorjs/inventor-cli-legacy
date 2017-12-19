/**
 * webpack 配置文件
 *
 * @author : sunkeysun
 */

export default {
    debug: {
        devServer: {
            host: '127.0.0.1',
            port: 8000,
        },
        webServer: {
            host: '127.0.0.1',
            port: 9999,
        },
        publicPath: 'http://127.0.0.1:8000/'
    },
    release: {
        publicPath: '//img.test.com/',
    },
}
