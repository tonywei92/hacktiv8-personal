const express = require('express')
const router = express.Router()
const user = require('./user')
const manga = require('./manga')

router.use('/', user)
router.use('/mangas', manga)

module.exports = router

