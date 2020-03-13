const express = require('express')
const app = express()
const port = 3000
const { donationRouter, campaignRouter } = require('./routes/index')
const flash = require('connect-flash')
const session = require('express-session')
const getPercentage = require('./helpers/getPercentage')
const formatUang = require('./helpers/formatUang')

app.use((req, res, next) => {
  res.locals.title = 'Fundrising Online'
  res.locals.getPercentage = getPercentage
  res.locals.formatUang = formatUang
  next()
})
  
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(session({ secret: 'keyboard warrior' }))
app.use(flash())
app.set('view engine', 'ejs')
app.use('/donations', donationRouter)
app.use('/campaigns', campaignRouter)
app.use('/', (req, res) => {
  res.redirect('/campaigns')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))