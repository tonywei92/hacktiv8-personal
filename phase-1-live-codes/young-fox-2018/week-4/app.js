const express = require('express')
const app = express()
const indexRoutes = require('./routes')
const logger = require('morgan')
app.use(logger('dev'))
app.use(express.static('views'))
app.use(express.urlencoded({ extended: false}))
app.use('/', indexRoutes)
module.exports = app