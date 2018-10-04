const router = require('koa-router')()

module.exports = app => {
  const { user } = app.controller
  router.get('/list', user.find.bind(user))
  router.get('/add', user.add.bind(user))
  return router
}