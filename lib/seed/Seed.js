const router = require('koa-router')()
const { getDB, getTables, getControllers, getServices, getRoutes } = require('./utils')
const tables = getTables()
const services = getServices()
const controllers = getControllers()
const routes = getRoutes()

class Seed {
  constructor (ctx) {
    this.ctx = ctx
    this.service = ctx.service = {}
    this.controller = {}
    this.router = router

    this.init()
  }

  async init () {
    // 实例化db
    this.db = this.ctx.db = getDB()

    this.initDB()
    this.initService()
    this.initController()
    this.initRouter()
  }

  initDB () {
    for (const key in tables) {
      this.db.query(tables[key], [])
    }
  }

  initService () {
    services.forEach(_ => {
      const Ctor = require(_.path)
      const instance = new Ctor(this.ctx)
      this.service[_.name] = instance
    })
  }

  initController () {
    controllers.forEach(_ => {
      const Ctor = require(_.path)
      const instance = new Ctor(this.ctx)
      this.controller[_.name] = instance
    })
  }

  initRouter () {
    routes.forEach(_ => {
      const childRouter = require(_.path)(this)
      this.router.use(_.baseURL, childRouter.routes(), childRouter.allowedMethods())
    })

    this.router.use('/api', router.routes(), router.allowedMethods())

    this.ctx.app.use(this.router.routes())
  }
}

module.exports = Seed