const router = require('koa-router')()
const MenuController = require('../../controllers/Menu')

router.get('/list', MenuController.find)
router.get('/add', MenuController.add)

module.exports = router