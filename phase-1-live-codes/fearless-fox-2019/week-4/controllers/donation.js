const { Donation, Campaign } = require('../models/index')

class DonationController {
  static create(req, res) {
    Campaign.findByPk(req.params.campaignId)
      .then(campaign => {
        const { verified, timeLimit } = campaign
        req.body.CampaignId = req.params.campaignId
        return Donation.create(req.body, { verified, timeLimit })
      })
      .then(result => {
        req.flash('successMessage', {
          message: 'berhasil menambah donasi'
        })
        res.redirect('/campaigns/' + req.params.campaignId)
      })
      .catch(err => {
        const { errors } = err
        req.flash('errors', errors)
        res.redirect('/campaigns/' + req.params.campaignId)
      })
  }

  static deleteOne(req, res) {
    Donation.destroy({
      where: {
        id: req.params.id
      },
      individualHooks: true
    })
    .then(data => {
      res.redirect('/donations')
    })
    .catch(err => {
      res.send(err)
    })
  }

  static findAll(req, res) {
    Donation.findAll({
      include: {
        model: Campaign,
        attributes: ['name']
      }
    })
      .then(donations => {
        res.render('index', { page: 'donation', donations, flash: req.flash() })
      })
      .catch(err => {
        res.send(err)
      })
  }

  static verifyPayment(req, res) {
    Donation.findByPk(req.params.id)
      .then(donation => {
        if (!donation.paid) {
          donation.paid = true
          donation.paidDate = new Date()
          return donation.save()
        }
      })
      .then(data => {
        res.redirect('/donations')
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = DonationController