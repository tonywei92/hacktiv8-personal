const express = require('express')
const app = express()
const port = 3001;
const campaignRouter = require('./routes/campaignRoutes');
const donationRouter = require('./routes/donationRoutes');

app.set('view engine', 'ejs');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/campaigns', campaignRouter)
app.use('/donations', donationRouter)
app.get('/', (req, res) => res.redirect('/campaigns'))
app.listen(port, () => console.log(`listening at port ${port}`))