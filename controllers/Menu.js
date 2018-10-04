const {BaseController} = require('tiy')

module.exports = class MenuController extends BaseController {
  async find () {
    const [data] = await this.service.menu.find()
    this.ctx.success({
      data: {
        list: data
      }
    })
  }

  async add () {
    const { query } = this.ctx
    const data = await this.service.menu.add(query)
    this.ctx.success({
      data
    })
  }
}