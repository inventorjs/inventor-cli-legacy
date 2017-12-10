/**
 * 全局变量服务提供者
 *
 * @author : sunkeysun
 */

import IClass from './Base/IClass'
import IException from './Base/IException'
import lodash from 'lodash'

export default class GlobalRegister extends IClass {
    static register(app) {
        lodash.extend(global, {
            IClass,
            IException,
            _: lodash,
            app: () => {
                return app
            },
        })
    }
}
