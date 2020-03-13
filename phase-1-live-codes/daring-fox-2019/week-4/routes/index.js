const router = require("express").Router()
const courtRoutes = require("./courtRoutes")
const reportRoutes = require("./reportRoutes")

router.get("/", (req, res) => {
  res.send("index routes")
})

router.use("/courts", courtRoutes)
router.use("/reports", reportRoutes)

module.exports = router