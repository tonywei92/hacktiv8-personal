const express = require('express')
const router = express.Router()
const todo = require('../controllers/todoController')
const auth = require('../middlewares/auth')

router.post('/', auth.authentication, todo.create)
router.get('/', auth.authentication, todo.findAll)
router.delete('/:todoId', auth.authentication, auth.todosOwner, todo.delete)
router.get('/:todoId/findone', todo.findOne)
router.patch(
  '/:todoId/updatestatus',
  auth.authentication,
  auth.todosOwner,
  todo.updateStatus
)

module.exports = router
