const Movie = require('../models/Movie')
const View = require('../views/View')
class MovieController {
  
  static addMovie(name, duration, date) {
    const newMovie = new Movie({
      name, duration, date
    })
    newMovie.save((err, data) => {
      if (err) {
        View.displayError(err)
      } else {
        View.displaySuccess(`Successfully added movie with ID ${data.lastID}`)
      }
    })
  }

  static updateNowPlaying(movieId) {
    Movie.update({
      id: movieId
    }, function(err, data) {
      if (err) {
        View.displayError(err)
      } else {
        if ( data ) {
          let isAvailable = 'available'
          if ( data.nowPlaying === 0 ) {
            isAvailable = 'unavailable'
          }
          View.displaySuccess(`${data.name} is ${isAvailable} on cinema`)
        } else {
          View.displayError("Movie not found")
        }
      }
    })
  }

  static showRecommendation(field, orderBy) {
    Movie.find({
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

module.exports = MovieController