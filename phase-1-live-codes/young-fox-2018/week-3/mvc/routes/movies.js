const MovieController = require('../controllers/movieControllers')
exports.moviesRoutes = ([command, ...value]) => {
  switch (command) {
    case "add":
      MovieController.addMovie(value[0], value[1], value[2])
      break;
    case "showRecommendation":
      let params = value[0].split(':')
      MovieController.showRecommendation(params[0], params[1])
      break
    case "nowPlaying":
      MovieController.updateNowPlaying(value[0])
      break
    default:
      console.log("wrong table name")
      break;
  }
}