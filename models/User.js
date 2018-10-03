const BaseModel = require('./Base')

class UserModel extends BaseModel {
  static async find () {
    return this.query(`select * from users`)
  }

  static add (params) {
    return this.insert(params)
  }
}

UserModel.$table = 'users'

module.exports = UserModel