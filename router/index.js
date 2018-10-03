const router = require('koa-router')()
const apiRoutes = require('./routes')

router.use('/api', apiRoutes.routes(), apiRoutes.allowedMethods())

module.exports = router