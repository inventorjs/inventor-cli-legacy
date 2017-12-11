
import TestMiddleware from '@server/app/Middleware/TestMiddleware'
import TTMiddleware from '@server/app/Middleware/TTMiddleware'

export default (router) => {
    router.get('/test', 'TestController@test')
    router.get('/test/:id.html', 'TestController@test123')
}
