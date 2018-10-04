const {BaseService} = require('../lib/seed')

class OrderService extends BaseService {
  find () {
    return this.query(`SELECT * from orders`)
  }

  add (params) {
    return this.insert(params)
  }
}

OrderService.$table = 'orders'

module.exports = OrderService