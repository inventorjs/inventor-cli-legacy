/**
 * 基础服务器提供者
 *
 * @author : sunkeysun
 */

import IClass from './IClass'

export default class ServiceProvider extends IClass {
    register() {
        throw new IException('servicer provider must implement register function')
    }
}
