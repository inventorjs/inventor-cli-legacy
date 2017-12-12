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

export function config(configName) {
    const configPath = app().configPath + configName
    const env = app().env

    const envConfigPath = `${configPath}${env}/${configName}`
    let configModule = null

    try {
        configModule = require(envConfigPath)
    } catch (err) {
        configModule = require(configPath)
    }

    if (!_.isUndefined(configModule.default)) {
        configModule = configModule.default
    }

    return configModule
}
