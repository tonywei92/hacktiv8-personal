const express = require("express"),
      app = express(),
      port = process.env.PORT || 3000,
      indexRoutes = require("./routes")

app.use(express.urlencoded({ extended: false }))
app.use("/", indexRoutes)
app.listen(port, () => console.log(`Listen on port ${port}`))