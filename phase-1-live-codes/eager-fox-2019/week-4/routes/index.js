const route = require('express').Router()
const restaurantsRoute = require('./restaurants')
const schedulesRoute = require('./schedules')

route.get('/', (req, res) => {
  res.redirect('/schedules')
})

route.use('/restaurants', restaurantsRoute)
route.use('/schedules', schedulesRoute)

module.exports = route