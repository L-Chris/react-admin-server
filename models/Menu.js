const BaseModel = require('./Base')

class MenuModel extends BaseModel {
  static async find () {
    return BaseModel.query(`SELECT * from menus`)
  }

  static add (params) {
    return this.insert(params)
  }
}

MenuModel.$table = 'menus'

module.exports = MenuModel