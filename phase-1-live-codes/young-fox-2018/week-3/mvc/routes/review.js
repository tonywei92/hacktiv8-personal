const ReviewController = require('../controllers/reviewControllers')
exports.reviewRoutes = ([command, ...value]) => {
  switch (command) {
    case "add":
      ReviewController.addReview(value[0], value[1], value[2])
      break
    case "delete":
      ReviewController.deleteReview(value[0])
      break
    case "recommendation":
      let params = value[0].split(':')
      ReviewController.showRecommendation(params[0], params[1])
      break
    default:
      break
  }
}