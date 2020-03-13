require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const routes = require('./routes')

const mongoose = require('mongoose')
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/glory-lc', {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we connect')
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use('/', routes)

//error handlers
app.use((err, req, res, next) => {
    if(err.errors) {
        err.message = []
        for(let key in err.errors) {
            err.message.push(err.errors[key].message)
        }
        err.status = 400
    }
    res.status(err.status ? err.status : 500).json(err.message ? err.message : 'internal server error')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))