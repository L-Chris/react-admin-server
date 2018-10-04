const router = require('koa-router')()

module.exports = seed => {
  const { user } = seed.controller
  router.get('/list', user.find.bind(user))
  router.get('/add', user.add.bind(user))
  return router
}