/**
 * session 配置文件
 *
 * @author : sunkeysun
 */

export default {
    store: 'cookie',
    key: 'NODESESS',
    maxAge: 86400 * 1000,
    httpOnly: true,
    overwrite: false,
    signed: true,

    storeConfig: {
        redis: {
            mode: 'cluster',    // cluster | single
            servers: [
                {
                    host: '127.0.0.1',
                    port: 6379,
                },
                {
                    host: '127.0.0.1',
                    port: 6380,
                },
            ],
        },
    }
}
