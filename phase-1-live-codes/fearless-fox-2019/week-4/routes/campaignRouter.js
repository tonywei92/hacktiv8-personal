const express = require('express')
const router = express.Router()
const { CampaignController } = require('../controllers/index')

router.get('/', CampaignController.findAll)
router.get('/:id', CampaignController.findOne)
router.get('/verify/:id', CampaignController.editStatus)
router.get('/update/:id', CampaignController.renderUpdate)
router.post('/update/:id', CampaignController.updateOne)

module.exports = router