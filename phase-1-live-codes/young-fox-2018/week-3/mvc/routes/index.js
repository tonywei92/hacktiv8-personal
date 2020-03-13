const { moviesRoutes } = require('./movies')
const { reviewRoutes } = require('./review')
exports.indexRoutes = (argv) => {
  switch (argv[0]) {
    case "movie":
      moviesRoutes(argv.slice(1))
      break;
    case "review":
      reviewRoutes(argv.slice(1))
      break
    default:
      console.log("wrong table name")
      break;
  }
}