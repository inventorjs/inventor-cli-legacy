/**
 * Http 核心类
 *
 * @author : sunkeysun
 */

import lodash from 'lodash'
import CoreApp from 'koa'

import IException from '../Support/Base/IException'
import ConfigLoader from '../Support/ConfigLoader'
import LogProvider from '../Log/LogProvider'
import RedisProvider from '../Redis/RedisProvider'
import SessionProvider from '../Session/SessionProvider'
import RoutingProvider from '../Routing/RoutingProvider'
import { config } from '../Support/helpers'

export default class Kernel {
    _coreApp = new CoreApp()
    _basePath = ''
    _logger = null
    _redis = null
    _session = null
    _singletons = {}
    _booted = false

    _appConfig = {}

    constructor(basePath) {
        this._basePath = basePath

        this._initEnv()
        this._registerGlobal()
    }

    get configPath() {
        const targetPath = `${this._basePath}server/config/`
        return targetPath
    }

    get routesPath() {
        const targetPath = `${this._basePath}server/routes/`
        return targetPath
    }

    get vendorPath() {
        const targetPath = `${this._basePath}server/vendor/`
        return targetPath
    }

    get appPath() {
        const targetPath = `${this._basePath}server/app/`
        return targetPath
    }

    get controllerPath() {
        const targetPath = `${this.appPath}Http/Controllers/`
        return targetPath
    }

    get sharedPath() {
        const targetPath = `${this._basePath}shared/`
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
        return config(configName)
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

    _initEnv() {
        const { env } = require(`${this.configPath}/env`)
        this._env = env
    }

    _initApp() {
        this._appConfig = this.config('app')

        this._coreApp.keys = this.config('app').keys
    }

    _registerBaseProvider() {
        this._registerLogProvider()
        this._registerRedisProvider()
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

    _registerGlobal() {
        lodash.extend(global, {
            IException,
            _: lodash,
            app: () => {
                return this
            },
        })
    }

    run() {
        if (!!this._booted) {
            throw new IException('Http kernel can\'t be rebooted.')
        }

        this._initApp()
        this._registerBaseProvider()

        const { host, port } = this._appConfig.server

        this._coreApp.listen(port, host)

        this.logger('kernel').info(`Inventor server started on ${host}:${port}`)

        this._booted = true
    }
}
