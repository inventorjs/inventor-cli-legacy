/**
 * Http 基础控制器
 *
 * @author : sunkeysun
 */

import IClass from '../support/base/IClass'
import Request from './Request'
import Response from './Response'

export default class Controller extends IClass{
    constructor(ctx, next) {
        super()

        this.request = new Request(ctx)
        this.response = new Response(ctx)
        this.logger = app().logger('controller')
    }
}
