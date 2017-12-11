/**
 * redis配置文件
 *
 * @author : sunkeysun
 */

export default {
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
}
