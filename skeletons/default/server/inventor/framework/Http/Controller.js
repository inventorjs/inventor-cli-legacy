/**
 * Http 基础控制器
 *
 * @author : sunkeysun
 */

import IClass from '../Support/Base/IClass'
import Request from './Request'
import Response from './Response'

export default class Controller extends IClass{
    constructor(ctx, next) {
        super()

        this.request = new Request(ctx)
        this.response = new Response(ctx)
    }
}
