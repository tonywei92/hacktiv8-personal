const express = require('express');
const Sequelize = require('sequelize')
const Router = express.Router();
const { campaign } = require('../models');

Router.get('/', (req, res) => {
    campaign.findAll({
        include: [{
            model: campaign.donation
        }]
    }).then(rows => {
        res.render('campaigns/index', { campaigns: rows })
    })
})

Router.get('/:campaignId', (req, res) => {
    const { campaignId } = req.params;

    campaign.findOne({
        include: [{
            model: campaign.donation
        }],
        where: {
            id: campaignId
        }
    }).then(row => {
        const data = { campaign: row, error: '' }
        if (req.query.error) {
            data.error = req.query.error;
        }
        res.render('campaigns/campaign', data)
    })
})

Router.get('/verify/:campaignId', (req, res) => {
    const { campaignId } = req.params;
    campaign.update({
        verified: true
    },
        {
            where: {
                id: campaignId
            }
        }).then(() => {
            res.redirect('/campaigns');
        })
})

module.exports = Router;