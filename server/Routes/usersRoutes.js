const router = require('express').Router()
const auth = require("../middlewares/authMiddleware")
const usersCtrl = require('../controllers/usersController')

router.patch('/user', auth, usersCtrl.updateUser)


module.exports = router