const { Review, Movie } = require('../models/')
module.exports = {
  postNewReview: async (req, res) => {
    try {
      const { description, rating } = req.body
      const newReview = new Review({
        description, rating, MovieId: req.params.movieId
      })
      const review = await newReview.save()
      let info = `success create review`
      res.redirect(`/movies/${req.params.movieId}?info=${info}`)
    } catch (error) {
      if ( error.name === 'SequelizeValidationError') {
        res.redirect(`/movies/${req.params.movieId}?validationErrors=${JSON.stringify(error.errors)}`)
      } else {
        res.send(error)
      }
    }
  },
  deleteReview: async (req, res) => {
    try {
      const review = await Review.findByPk(req.params.reviewId)
      await review.destroy()
      let info = `success delete review with description: ${review.description}`
      res.redirect(`/movies/${review.MovieId}?info=${info}`)
    } catch (error) {
      res.send(error)
    }
  }
}