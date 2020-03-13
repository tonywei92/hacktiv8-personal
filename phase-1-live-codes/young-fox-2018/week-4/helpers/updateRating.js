exports.updateRating = (sequelize, review, options ) => {
  return sequelize
                  .models
                  .Movie
                  .findByPk(review.MovieId)
                  .then((movie) => {
                    return movie.updateRating()
                  })
                  .catch((err) => {
                    throw new Error(err)
                  })
}