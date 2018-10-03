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
    const { query } = ctx
    const data = await UserModel.add(query)
    ctx.success({
      data
    })
  }
}