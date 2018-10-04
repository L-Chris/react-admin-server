const router = require('koa-router')()

module.exports = seed => {
  const { order } = seed.controller
  router.get('/list', order.find.bind(order))
  router.get('/add', order.add.bind(order))
  return router
}