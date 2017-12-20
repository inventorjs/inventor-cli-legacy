/**
 * 路由处理器
 *
 * @author : sunkeysun
 */

import path from 'path'
import CoreRouter from 'koa-router'

import IClass from '../Support/Base/IClass'
import Route from './Route'
import Request from '../Http/Request'
import Response from '../Http/Response'

export default class Router extends IClass {
    _routePath = ''
    _options={}
    _coreRouter = new CoreRouter()

    get routePath() {
        return this._routePath
    }

    set routePath(routePath) {
        this._routePath = routePath
    }

    get(...args) {
        args.unshift('get')
        return Reflect.apply(this._handle, this, args)
    }

    post(...args) {
        args.unshift('post')
        return Reflect.apply(this._handle, this, args)
    }

    put(...args) {
        args.unshift('put')
        return Reflect.apply(this._handle, this, args)
    }

    delete(...args) {
        args.unshift('delete')
        return Reflect.apply(this._handle, this, args)
    }

    patch(...args) {
        args.unshift('patch')
        return Reflect.apply(this._handle, this, args)
    }

    group(prefix, handler, options) {
        const prePrefix = this._routePath
        const routePath = `${prePrefix}${prefix}`
        const groupRouter = _.clone(this)

        groupRouter.routePath = routePath
        groupRouter.options = _.extend({}, this._options, options)

        handler(groupRouter)

        return groupRouter
    }

    routes() {
        return this._coreRouter.routes()
    }

    _getMiddlewareHandlers(middleware=[]) {
        const middlewareHandlers = _.map(middleware, (middlewareKey) => {
            const middlewareClass = app().middlewareMap[middlewareKey]
            if (!middlewareClass) {
                throw new IException(`Middleware ${middlewareKey} not defined`)
            }
            const middlewareInstance = new middlewareClass()
            return middlewareInstance.handle.bind(middlewareInstance)
        })

        return middlewareHandlers
    }

    _handle(method, routePath, handler, { middleware }=[]) {
        const preRoutePath = _.get(this, 'routePath', '')
        routePath = path.normalize(`${preRoutePath}${routePath}`)

        const route = new Route(handler)

        let routeArgs = [ routePath ]
        const middlewareHandlers = this._getMiddlewareHandlers(middleware)
        routeArgs = routeArgs.concat(middlewareHandlers)

        const routeHandler = (ctx, next) => {
            return route.handle(ctx, next)
        }

        routeArgs.push(routeHandler)

        this._coreRouter[method].apply(this._coreRouter, routeArgs)

        return this
    }
}
