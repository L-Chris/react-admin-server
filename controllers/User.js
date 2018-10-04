const {BaseController} = require('tiy')

module.exports = class UserController extends BaseController {
  async find () {
    const [data] = await this.service.user.find()
    this.ctx.success({
      data: {
        list: data
      }
    })
  }

  async add () {
    const { body } = this.ctx.request
    const data = await this.service.user.add(body)
    this.ctx.success({
      data
    })
  }
}