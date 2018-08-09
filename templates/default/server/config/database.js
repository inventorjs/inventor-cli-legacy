/**
 * 数据库相关配置
 *
 * @author : sunkeysun
 */

export const dianshi = {
    driver: null,

    host: '127.0.0.1',
    port: 3306,
    database: 'example',
    username: 'root',
    password: '123456',

    options: {
        pool: {
            max: 5,
            min: 1,
            idle: 10000,
        },
        logging: (msg) => {
            app().logger.debug(msg, 'database')
        }
    }
}
