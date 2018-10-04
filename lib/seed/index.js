const Seed = require('./Seed')

exports.Seed = Seed

exports.BaseController = require('./BaseController')

exports.BaseService = require('./BaseService')

exports.initSeed = async (ctx, next) => {
  ctx.seed = new Seed(ctx)
  await next()
}