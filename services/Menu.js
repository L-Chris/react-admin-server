const { BaseService } = require('tiy')

class MenuService extends BaseService {
  find () {
    return this.query(`SELECT * from menus`)
  }

  add (params) {
    return this.insert(params)
  }
}

MenuService.$table = 'menus'

module.exports = MenuService