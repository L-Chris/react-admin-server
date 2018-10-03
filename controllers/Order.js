const OrderModel = require('../models/Order')

module.exports = class OrderController {
  static async find (ctx, next) {
    const [data] = await OrderModel.find()
    ctx.success({
      data: {
        list: data
      }
    })
  }

  static async add (ctx, next) {
    const { query } = ctx
    const data = await OrderModel.add(query)
    ctx.success({
      data
    })
  }
}