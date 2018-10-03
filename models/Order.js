const BaseModel = require('./Base')

class OrderModel extends BaseModel {
  static async find () {
    return BaseModel.query(`SELECT * from orders`)
  }

  static add (params) {
    return this.insert(params)
  }
}

OrderModel.$table = 'orders'

module.exports = OrderModel