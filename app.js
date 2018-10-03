const Koa = require('koa')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const json = require('koa-json')
const logger = require('koa-logger')
const interceptor = require('./middlewares/interceptor')
const router = require('./router')
require('./models/init')

const app = new Koa()

onerror(app)

app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())


// logger
app.use(async (ctx, next) => {
  let start = new Date()
  await next()
  let ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(interceptor)
app.use(router.routes())

module.exports = app