const getPool = require('.')

module.exports = class BaseModel {
  static async query (params) {
    const connection = await getPool()
    return connection.query(params)
  }
}