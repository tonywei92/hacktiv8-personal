const route = require('express').Router()

const vegetable = require('./vegetable')
const transaction = require('./transaction')

route.get('/', function(req, res) {
  res.render('pages/home.ejs')
})

// ! routes
route.use((req, res, next) => {
  res.locals.romanNumerals = require('../helpers').romanNumerals
  next()
})
route.use('/vegetables', vegetable)
route.use('/transactions', transaction)

route.get('/*', function(req, res) {
  res.render('pages/404.ejs')
})

module.exports = route