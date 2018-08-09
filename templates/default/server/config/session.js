/**
 * session 配置文件
 *
 * @author : sunkeysun
 */

export default {
    store: null,
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
                    db: 1,
                },
            ],
        },
    }
}
