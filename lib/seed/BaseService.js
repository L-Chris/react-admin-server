module.exports = class BaseService {
  constructor (ctx) {
    this.ctx = ctx
    this.db = ctx.db
  }

  async query (params) {
    return this.db.query(params)
  }

  async insert (params) {
    const values = Array.isArray(params) ? params : [params]
    return this.query({
      sql: `INSERT INTO ${this.$table} SET ?`,
      values,
      namedParameters: false
    })
  }
}