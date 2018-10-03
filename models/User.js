const BaseModel = require('./Base')

module.exports = class UserModel extends BaseModel {
  static async find () {
    return BaseModel.query(`SELECT * from users;`)
  }

  static add (params) {
    return BaseModel.query('INSERT INTO users SET ?;', params)
  }
}