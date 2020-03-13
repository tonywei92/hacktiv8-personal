const { Campaign, Donation } = require('../models/index')
const formatUang = require('../helpers/formatUang')
const getPercentage = require('../helpers/getPercentage')

class CampaignController {
  static findAll(req, res) {
    Campaign.findAll()
      .then(campaigns => {
        res.render('index', { campaigns, page: 'campaign', flash: req.flash() })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static editStatus(req, res) {
    Campaign.findByPk(req.params.id)
      .then(campaign => {
        if (!campaign.verified) {
          campaign.verified = true
          req.flash('successMessage', 'Now this campaign is verified')
          return campaign.save()
        }
      })
      .then(() => {
        res.redirect('/campaigns')
      })
      .catch(err => {
        res.send(err)
      })
  }

  static findOne(req, res) {
    Campaign.findByPk(req.params.id, {
      include: [{
        model: Donation
      }]
    })
      .then(campaign => {
        if (campaign.verified) {
          campaign.Donations = campaign.Donations.filter(donation => donation.paid === true)
          let total = campaign.getCollectedAmount()
          campaign.setDataValue('collectedAmount', total)
          campaign.setDataValue('amountPercentage', getPercentage(total, campaign.donationTarget))
          res.render('index', { campaign, page: 'campaignDetail', formatUang, flash: req.flash() })
        } else {
          res.redirect('/campaigns')
        }
      })
      .catch(err => {
        res.send(err)
      })
  }

  static renderUpdate(req, res) {
    Campaign.findByPk(req.params.id)
      .then(campaign => {
        res.render('index', { page: 'campaignUpdate', campaign, flash: req.flash() })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static updateOne(req, res) {
    Campaign.findByPk(req.params.id)
      .then(campaign => {
        campaign.name = req.body.name || campaign.name
        campaign.description = req.body.description || campaign.description
        campaign.location = req.body.location || campaign.location
        campaign.donationTarget = req.body.donationTarget || campaign.donationTarget
        campaign.timeLimit = req.body.timeLimit || campaign.timeLimit
        campaign.verified = req.body.verified === 'on'
        return campaign.save()
      })
      .then(data => {
        res.redirect('/campaigns')
      })
      .catch(err => {
        req.flash('errors', err.errors)
        res.redirect('/campaigns/update/' + req.params.id)
      })
  }

}

module.exports = CampaignController