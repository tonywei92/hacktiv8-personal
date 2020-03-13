const router = require('express').Router()
const kingdomRoutes = require('./kingdoms')
const soldierRoutes = require('./soldiers')
router.get('/', (req, res) => res.render("pages/Home.ejs"))
router.use('/kingdoms', kingdomRoutes)
router.use('/soldiers', soldierRoutes)
module.exports = router