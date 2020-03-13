const router = require('express').Router()
const factoryRoutes = require('./factory')
const robotRoutes = require('./robots')

router.get ('/', (req, res) => {
  res.render ('pages/factories/homepage.ejs')
})

router.use('/factories', factoryRoutes)
router.use('/robots', robotRoutes)
module.exports = router