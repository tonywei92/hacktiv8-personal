const express = require("express")
const logger = require("morgan")
const app = express()
const port = process.env.PORT || 3000
const indexRoutes = require("./routes")

app.use(logger("dev"))
app.use(express.urlencoded({ extended: false }))
app.use("/", indexRoutes)

app.listen(port, () => console.log(`Listen on port: ${port}`))