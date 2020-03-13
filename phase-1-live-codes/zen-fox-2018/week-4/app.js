const express = require('express')
const app = express()
const port = 3000
const indexRoutes = require('./routes')
app.use(express.static('views'))
app.use(express.urlencoded({extended: false}))
app.use('/', indexRoutes)
app.listen(port, () => console.log("listen on port: " + port))