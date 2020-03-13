const router = require('express').Router()
const { renderMoviesPage, renderDetailMoviePage } = require('../../controllers/movieControllers')
router.get('/', renderMoviesPage )
router.get('/:id', renderDetailMoviePage )
module.exports = router