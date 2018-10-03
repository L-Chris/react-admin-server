const BaseModel = require('./Base')

module.exports = class OrderModel extends BaseModel {
  static async find () {
    return BaseModel.query(`SELECT * from orders;`)
  }

  static add (params) {
    return BaseModel.query('INSERT INTO orders SET ?;', params)
  }
}