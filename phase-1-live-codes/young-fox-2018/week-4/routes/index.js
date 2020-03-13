const router = require('express').Router()
const movieRoutes = require('./movies')
const reviewRoutes = require('./reviews')
router.get('/', (req, res) => {
  res.render('pages/home.ejs')
})

router.use('/movies', movieRoutes)
router.use('/reviews', reviewRoutes)
module.exports = router
