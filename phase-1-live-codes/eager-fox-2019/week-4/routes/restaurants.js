const route = require('express').Router()
const { Restaurant } = require('../models')

route.get('/', (req, res) => {
  Restaurant.findAll()
    .then(restos => {
      res.render('index', { _page: 'restaurants', restos })
    })
    .catch(err => { res.send(err) })
})

route.post('/', (req, res) => {
  Restaurant.create({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location
  })
    .then(resto => {
      res.redirect('/restaurants')
    })
    .catch(err => { res.send(err) })
})

route.get('/:id', (req, res) => {
  Restaurant.findByPk(req.params.id)
    .then(resto => {
      res.render('index', { _page: 'planBukber', resto, flash: req.flash() })
    })
    .catch(err => { res.send(err) })
})


module.exports = route