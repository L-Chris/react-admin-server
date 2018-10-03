const getPool = require('.')

module.exports = class BaseModel {
  static async query (params) {
    const connection = await getPool()
    return connection.query(params)
  }

  static async insert (params) {
    const values = Array.isArray(params) ? params : [params]
    return this.query({
      sql: `INSERT INTO ${this.$table} SET ?`,
      values,
      namedParameters: false
    })
  }
}