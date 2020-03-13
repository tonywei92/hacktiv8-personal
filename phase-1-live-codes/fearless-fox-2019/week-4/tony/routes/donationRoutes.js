const express = require('express');
const Router = express.Router();
const { donation } = require('../models');

Router.get('/', (req, res) => {
    const data = { success: '' };
    if (req.query.success) {
        data.success = req.query.success
    }
    donation.findAll({
        include: [{
            model: donation.campaign
        }]
    }).then(row => {
        data.donations = row;
        res.render('donations/index', data)
    })
});

Router.post('/:campaignId', (req, res) => {
    const { timeLimit } = req.body;
    const { campaignId } = req.params;
    const data = req.body;
    data.campaignId = campaignId;
    console.log('timemeeee', timeLimit)
    donation.create(req.body, { timeLimit }).then(req => {
        res.redirect('/donations/?success=Success add donation')
    }).catch(err => {
        res.redirect('/campaigns/' + campaignId + '?error=' + err.message)
    })
})

Router.get('/verify/:donationId', (req, res) => {
    const { donationId } = req.params;
    donation.update({
        paid: true,
        paidDate: new Date()
    }, {
            where: {
                id: donationId
            }
        }).then(() => {
            res.redirect('/donations');
        })
})

Router.get('/delete/:donationId', (req, res) => {
    const { donationId } = res.params;
    donation.destroy({
        where: {
            id: donationId
        }
    }).then(() => {
        res.redirect('/donations');
    })
})

module.exports = Router;