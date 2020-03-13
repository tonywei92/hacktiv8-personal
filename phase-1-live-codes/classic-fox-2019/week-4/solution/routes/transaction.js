const route = require('express').Router()
const Model = require('../models')
const pascalCase = require('../helpers').pascalCase

route.get('/', function(req, res) {
  Model.Season.findAll({include: [ Model.Vegetable ], order:[['id', 'ASC']]})
  .then(seasons => {
    res.render('pages/getTransactions', {
      columns: ["No", "Season", "Outcome", "Income", "Total", "Options"],
      data: seasons
    })
  })
})

route.get('/:id/viewDetail', function(req, res) {
  Model.Season.findByPk(req.params.id, {include: [ Model.Vegetable ], order:[[Model.Vegetable, 'id', 'ASC']]})
  .then(season => {
    res.render('pages/getDetailTransaction', {
      title: pascalCase(season.name),
      columns: ["No", "Vegetable", "Season", "Buy", "Sell"],
      data: season
    })
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = route