/**
 * 配置文件入口
 *
 * @author : sunkeysun
 */

const envs = [ 'development', 'test', 'production' ]
const env = process.env.NODE_ENV || 'productions'

export { env }
