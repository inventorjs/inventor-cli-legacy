/**
 * redis配置文件
 *
 * @author : sunkeysun
 */

export default {
    mode: null,    // cluster | single
    servers: [
        {
            host: '127.0.0.1',
            port: 6379,
            db: 2,
        },
    ],
}
