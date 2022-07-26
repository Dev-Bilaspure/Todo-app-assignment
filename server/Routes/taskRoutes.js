const router = require('express').Router()
const tasksCtrl = require('../controllers/taskController')

router.post('/addtask', tasksCtrl.addTask)

router.post('/deletetask', tasksCtrl.removeTask)

router.post('/updatetask', tasksCtrl.updateTask)



module.exports = router