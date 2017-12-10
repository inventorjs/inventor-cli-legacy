
import TestMiddleware from '@server/app/Middleware/TestMiddleware'
import TTMiddleware from '@server/app/Middleware/TTMiddleware'

export default (router) => {
    router.get('/test', 'TestController@test', { middleware: [ TestMiddleware, TTMiddleware ]})
    router.get('/test/:id.html', 'TestController@test123')
}
