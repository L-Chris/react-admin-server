const {BaseController} = require('tiy')

module.exports = class OrderController extends BaseController {
  async find () {
    const [data] = await this.service.order.find()
    this.ctx.success({
      data: {
        list: data
      }
    })
  }

  async add () {
    const { query } = this.ctx
    const data = await this.service.order.add(query)
    this.ctx.success({
      data
    })
  }
}