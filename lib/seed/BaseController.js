class BaseController {
  constructor (ctx) {
    this.ctx = ctx
    this.service = ctx.service
  }
}

module.exports = BaseController