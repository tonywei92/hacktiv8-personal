const router = require("express").Router()
const {
  getAll,
  getDetail
} = require("../controllers/courtController")

router.get("/", getAll)
router.get("/:courtId", getDetail)
module.exports = router