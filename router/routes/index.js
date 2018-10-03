const glob = require('glob')
const path = require('path')
const router = require('koa-router')()

const routers = glob.sync(`${__dirname}/!(index).js`)
  .map(_ => ({
    baseURL: `/${path.basename(_, '.js')}`,
    path: _
  }))
  .forEach(_ => {
    const childRouter = require(_.path)
    router.use(_.baseURL, childRouter.routes(), childRouter.allowedMethods())
  })

module.exports = router