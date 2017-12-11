/**
 * 通用助手
 *
 * @author : sunkesyun
 */

export function extendObject(obj, me, setters=[]) {
    const proxy = new Proxy(obj, {
        get: (target, prop) => {
            if (!_.isUndefined(me[prop])) {
                return me[prop]
            }
            return target[prop]
        },
        set: (target, prop, value) => {
            if (!_.isUndefined(me[prop])
            || !!~setters.indexOf(prop)) {
                return me[prop] = value
            } else {
                return target[prop] = value
            }
        }
    })

    return proxy
}
