const router = require('express').Router()
const { postNewReview, deleteReview } = require('../../controllers/reviewControllers.js')

router.post('/:movieId', postNewReview )
router.post('/delete/:reviewId', deleteReview)
module.exports = router