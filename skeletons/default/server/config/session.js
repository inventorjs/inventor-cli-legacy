/**
 * session 配置文件
 *
 * @author : sunkeysun
 */

export default {
    store: 'redis',
    key: 'NODESESS',
    maxAge: 86400 * 1000,
    httpOnly: true,
    overwrite: false,
    signed: true,
    rolling: true,

    config: {
        redis: {
            mode: 'single',    // cluster | single
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
