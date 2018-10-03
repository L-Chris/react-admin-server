const router = require('koa-router')()
const OrderController = require('../../controllers/Order')

router.get('/list', OrderController.find)
router.get('/add', OrderController.add)

module.exports = router