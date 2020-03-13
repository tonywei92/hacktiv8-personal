const express = require('express');
const app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.locals.format_currency = require('./helpers/format_number')

const restaurant = require('./routes/restaurant');
const menu = require('./routes/menu');

app.use('/restaurants', restaurant)
app.use('/menus', menu)

app.listen(3000)
