const router = require('koa-router')()

module.exports = app => {
  const { order } = app.controller
  router.get('/list', order.find.bind(order))
  router.get('/add', order.add.bind(order))
  return router
}