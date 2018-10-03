const UserModel = require('../models/User')

module.exports = class UserController {
  static async find (ctx, next) {
    const [data] = await UserModel.find()
    ctx.success({
      data: {
        list: data
      }
    })
  }

  static async add (ctx, next) {
    const { body } = ctx.request
    const data = await UserModel.add(body)
    ctx.success({
      data
    })
  }
}