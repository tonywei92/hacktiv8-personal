const express = require('express')
const routes = require('./routes')

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`this livecode running on port: ${PORT}`)
})