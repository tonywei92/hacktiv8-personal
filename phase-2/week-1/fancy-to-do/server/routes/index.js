var express = require('express')
var router = express.Router()

router.use('/todos', require('./todo'))
router.use('/users', require('./user'))
router.use('/projects', require('./project'))
router.use('/holidays', require('./holiday'))
module.exports = router
