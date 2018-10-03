const router = require('koa-router')()
const UserController = require('../../controllers/User')

router.get('/list', UserController.find)
router.post('/add', UserController.add)

module.exports = router