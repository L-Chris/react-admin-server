const MenuModel = require('../models/Menu')

module.exports = class MenuController {
  static async find (ctx, next) {
    const [data] = await MenuModel.find()
    ctx.success({
      data: {
        list: data
      }
    })
  }

  static async add (ctx, next) {
    const { query } = ctx
    const data = await MenuModel.add(query)
    ctx.success({
      data
    })
  }
}