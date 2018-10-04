const router = require('koa-router')()

module.exports = app => {
  const { menu } = app.controller
  router.get('/list', menu.find.bind(menu))
  router.get('/add', menu.add.bind(menu))
  return router
}