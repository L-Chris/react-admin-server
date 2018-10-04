const router = require('koa-router')()

module.exports = seed => {
  const { menu } = seed.controller
  router.get('/list', menu.find.bind(menu))
  router.get('/add', menu.add.bind(menu))
  return router
}