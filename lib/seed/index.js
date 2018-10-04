const Seed = require('./Seed')

exports.BaseController = require('./BaseController')

exports.BaseService = require('./BaseService')

exports.Seed = async (ctx, next) => {
  ctx.seed = new Seed(ctx)
  await next()
}