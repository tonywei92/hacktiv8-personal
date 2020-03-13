const express = require('express')
const router = express.Router()
const user = require('../controllers/userController')

router.post('/login', user.login)
router.post('/', user.register)
router.get('/', user.findOne)
// router.get('/', )
// router.patch('/:id', )

module.exports = router
