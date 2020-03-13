const express = require('express')
const router = express.Router()
const { DonationController } = require('../controllers/index')


router.get('/', DonationController.findAll)
router.get('/verify/:id', DonationController.verifyPayment)
router.get('/delete/:id', DonationController.deleteOne)
router.post('/:campaignId', DonationController.create)

module.exports = router