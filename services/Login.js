const {BaseService} = require('../lib/seed')

class LoginService extends BaseService {
  async login () {
    return this.query(`SELECT * from orders`)
  }

  async logout () {
    return this.query(`SELECT * from orders`)
  }
}

LoginService.$table = 'menus'

module.exports = LoginService