const express = require('express')
const session = require('express-session')
const flash = require('connect-flash');

const app = express()
const port = process.env.PORT || 3000

app.locals.formatTime = require('./helpers/formatTime')
app.locals.colorizeSchedule = require('./helpers/colorizeSchedules')

const route = require('./routes')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(session({ secret: 'keyboard cat' }))
app.use(flash());

app.use(route)

app.listen(port, () => { console.log('listening on port ' + port) })