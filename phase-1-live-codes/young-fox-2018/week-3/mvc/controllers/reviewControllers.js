const View = require('../views/View')
const Review = require('../models/Review')
class ReviewController {

  static addReview(movieId, rating, description) {
    const newReview = new Review({
      movieId, rating, description
    })
    newReview.save(function(err, data) {
      if (err) {
        View.displayError(err)
      } else {
        View.displaySuccess(`Successfully added review with ID: ${data.lastID}`)
      }
    })
  }

  static deleteReview(reviewId) {
    Review.delete(reviewId, function(err) {
      if (err) {
        View.displayError(err)
      } else {
        View.displaySuccess("Success delete review with ID: " + reviewId)
      }
    })
  }

  static showRecommendation(field, orderBy) {
    Review.find({
      field, orderBy
    }, function (err, data) {
      if (err) {
        View.displayError(err)
      } else {
        View.displaySuccess(data)
      }
    })
  }
}

module.exports = ReviewController