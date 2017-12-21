/**
 * 配置读取类
 *
 * @author : sunkeysun
 */

import IClass from './base/IClass'

export default class ConfigLoader extends IClass {
    static _configCache = {}

    static load(configName) {
        if (!!this._configCache[configName]) {
            return this._configCache[configName]
        }

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

        this._configCache[configName] = configModule

        return configModule
    }
}
