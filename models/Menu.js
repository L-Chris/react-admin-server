const BaseModel = require('./Base')

module.exports = class MenuModel extends BaseModel {
  static async find () {
    return BaseModel.query(`SELECT * from menus`)
  }

  static add (params) {
    return BaseModel.query('INSERT INTO menus SET ?', params)
  }
}