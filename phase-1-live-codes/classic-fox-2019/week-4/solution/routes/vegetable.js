const route = require('express').Router()
const Model = require('../models')
const helpers = require('../helpers')

route.get('/', function(req, res) {
  let info = {
    error: req.query.error,
    success: req.query.success
  }
  // res.send(info)
  Model.Vegetable.findAll({ include: [ Model.Season ], order:[['id', 'ASC']] })
  .then(vegetables => {
    res.render('pages/getVegetables', {
      data: vegetables,
      columns: ['No', 'Name', 'Season', 'Buy', 'Sell', 'WP', 'WTC', 'Status', 'Options'],
      statusValue: helpers.statusValue,
      statusOption: helpers.statusOption,
      info: info
    })
  })
  .catch(err => {
    err = err.errors.map(msg => msg.message)
    res.redirect(`/vegetables?error=${err}`)
  })
})

route.post('/', function(req, res) {
  // res.send(req.body)
  let { name, SeasonId, buy, sell, waterToCrops } = req.body
  Model.Vegetable.create({ name: name, buy: Number(buy), sell: Number(sell), waterToCrops: Number(waterToCrops), SeasonId: SeasonId }, {hooks: false})
  .then(info => {
    let success = `success ${name} as new vegetable!`
    res.redirect(`/vegetables?success=${success}`)
  })
  // .catch(err => res.send(err.errors))
  .catch(err => {
    err = err.errors.map(msg => msg.message)
    res.redirect(`/vegetables?error=${err}`)
  })
})

// ! Cara Hooks!
route.get('/:id/buy/:SeasonId', function(req, res) {
  Model.Vegetable.findByPk(req.params.id)
  .then(vegetable => {
    vegetable.waterPoin++
    return vegetable.save({
      SeasonId: req.params.SeasonId
    })
  })
  .then(data => {
    let success = `success buy vegetable!`
    res.redirect(`/vegetables?success=${success}`)
  })
  .catch(err => {
    err = err.errors.map(msg => msg.message)
    res.redirect(`/vegetables?error=${err}`)
  })
})

// ! Cara Manual
// route.get('/:id/buy/:SeasonId', function(req, res) {
//   // Ubah menjadi method hooks, Wik!
//   let outcome = 0
//   Model.Vegetable.findByPk(req.params.id)
//   .then(data => {
//     outcome = data.buy
//     data.waterPoin++
//     return data.save({
//       SeasonId: req.params.SeasonId
//     })
//   })
//   .then(data => {
//     return Model.Season.findByPk(req.params.SeasonId)
//   })
//   .then(season => {
//     season.outcome += outcome
//     return season.save()
//   })
//   .then(data => {
//     res.redirect('/vegetables')
//   })
//   .catch(err => {
//     res.send(err)
//   })
// })

route.get('/:id/watering', function(req, res) {
  Model.Vegetable.findByPk(req.params.id)
  .then(data => {
    data.waterPoin++
    return data.save({
      hooks: false
    })
  })
  .then(data => {
    res.redirect('/vegetables')
  })
  .catch(err => {
    err = err.errors.map(msg => msg.message)
    res.redirect(`/vegetables?error=${err}`)
  })
})

// ! Cara Hooks
route.get('/:id/sell/:SeasonId', function(req, res) {
  Model.Vegetable.findByPk(req.params.id)
  .then(vegetable => {
    return vegetable.destroy({
      SeasonId: req.params.SeasonId
    })
  })
  .then(data => {
    let success = `success sell vegetable!`
    res.redirect(`/vegetables?success=${success}`)
  })
  .catch(err => {
    err = err.errors.map(msg => msg.message)
    res.redirect(`/vegetables?error=${err}`)
  })
})


// ! Cara Manual
// route.get('/:id/sell/:SeasonId', function(req, res) {
//   let income = 0
//   Model.Vegetable.findByPk(req.params.id)
//   .then(vegetable => {
//     income = vegetable.sell
//     return Model.Vegetable.destroy({ where: {id: req.params.id } })
//   })
//   .then(data => {
//     return Model.Season.findByPk(req.params.SeasonId)
//   })
//   .then(season => {
//     season.income += income
//     return season.save()
//   })
//   .then(data => {
//     res.redirect('/vegetables')
//   })
//   .catch(err => {
//     res.send(err)
//   })
// })

module.exports = route