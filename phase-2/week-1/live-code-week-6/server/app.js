'use strict'

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const port = process.env.port
const errorHandler = require('./middlewares/errorHandler')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// app.use(errorHandler)
app.use(router)

app.listen(port, ()=> console.log('listening to port', port))