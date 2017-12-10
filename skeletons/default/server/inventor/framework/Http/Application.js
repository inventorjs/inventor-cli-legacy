/**
 * Http 主应用类
 *
 * @author : sunkeysun
 */

import CoreApp from 'koa'

import IClass from '../Support/Base/IClass'
import GlobalRegister from '../Support/GlobalRegister'
import ConfigLoader from '../Support/ConfigLoader'
import LogProvider from '../Log/LogProvider'
import RedisProvider from '../Redis/RedisProvider'
import SessionProvider from '../Session/SessionProvider'
import RoutingProvider from '../Routing/RoutingProvider'

export default class Application extends IClass {
    _coreApp = new CoreApp()
    _basePath = ''
    _logger = null
    _redis = null
    _session = null
    _singletons = {}
    _booted = false
    _env = process.NODE_ENV || 'production'    // development | test | production

    constructor(basePath) {
        super()

        this._basePath = basePath

        GlobalRegister.register(this)
    }

    get configPath() {
        const targetPath = `${this._basePath}config/`
        return targetPath
    }

    get routesPath() {
        const targetPath = `${this._basePath}routes/`
        return targetPath
    }

    get vendorPath() {
        const targetPath = `${this._basePath}vendor/`
        return targetPath
    }

    get appPath() {
        const targetPath = `${this._basePath}app/`
        return targetPath
    }

    get controllerPath() {
        const targetPath = `${this.appPath}Http/Controllers/`
        return targetPath
    }

    get logger() {
        return this._logger
    }

    get redis() {
        return this._redis
    }

    get env() {
        return this._env
    }

    config(configName) {
        return ConfigLoader.load(configName)
    }

    registerSingleton(id, instance) {
        if (!!_.isUndefined(this._singletons[id])) {
            return false
        }

        this._singletons[id] = instance

        return this
    }

    unregisterSingleton(id) {
        if (!_.isUndefined(id)) {
            return false
        }

        _.unset(this._singletons, id)

        return this
    }

    _initCoreApp() {
        this._coreApp.keys = this.config('app').keys
    }

    _registerBaseProvider() {
        // this._registerLogProvider()
        // this._registerRedisProvider()
        this._registerSessionProvider()
        this._registerRoutingProvider()
    }

    _registerLogProvider() {
        this._logger = ( new LogProvider() ).register()
    }

    _registerRedisProvider() {
        this._redis = ( new RedisProvider() ).register()
    }

    _registerRoutingProvider() {
        const routes = ( new RoutingProvider() ).register()
        this._coreApp.use(routes)
    }

    _registerSessionProvider() {
        const session = ( new SessionProvider() ).register()
        this._coreApp.use(session(this._coreApp))
    }

    run() {
        if (!!this._booted) {
            throw new IException('Application can\'t rebooted.')
        }

        this._initCoreApp()
        this._registerBaseProvider()

        this._coreApp.listen(8000)

        this._booted = true
    }
}
