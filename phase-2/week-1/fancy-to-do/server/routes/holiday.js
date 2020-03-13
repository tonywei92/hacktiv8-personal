const express = require('express')
const router = express.Router()
const holiday = require('../controllers/holidayController')
const auth = require('../middlewares/auth')

router.post('/', auth.authentication, holiday.create)
router.get('/', auth.authentication, holiday.findAll)
router.get('/date', holiday.holodaydate)

module.exports = router
