const db = require('../helpers/sqlite3db')
const Movie = require('./Movie')
const { changeDateFormat } = require('../helpers/changeDateFormat')
class Review {

  constructor(options) {
    this.movieId = options.movieId
    this.rating = Number(options.rating)
    this.desciption = options.description
  }

  save(callback) {
    const self = this
    if ( self.rating < 0 || self.rating > 5 ) {
      callback('rating input must between 0 and 5')
    } else {
      Movie.findOne( {
        field: 'id',
        value: self.movieId
      },function (err, row) {
        if (err) {
          callback(err)
        } else {
          if (!row) {
            callback("movie not found")
          } else {
            const gql = `
              INSERT INTO Reviews
              (movieId, rating, description)
              VALUES
              (${self.movieId}, ${self.rating}, '${self.desciption}')
            `
            db.run(gql, function(err) {
              if (err) {
                callback(err)
              } else {
                callback(null, this)
              }
            })
          }
        }
      }) 
    }
    
  }

  static delete(reviewId, callback) {
    const gql = `
      DELETE FROM Reviews
      WHERE id = ${reviewId}
    `
    db.run(gql, function(err) {
      if (err) {
        callback(err)
      } else {
        if ( this.changes === 0 ) {
          callback("review is not found")
        } else {
          callback(null)
        }
      }
    })
  }

  static find(options, callback) {
    const gql = `
      SELECT Movies.name AS title, 
            Movies.duration AS duration, 
            AVG(Reviews.rating) AS rating,
            COUNT(Reviews.description) AS totalReviewer,
            Movies.releasedDate AS released
            FROM Reviews 
      LEFT OUTER JOIN Movies ON Movies.id = Reviews.movieId 
      WHERE Movies.nowPlaying = 1
      GROUP BY Movies.name
      ORDER BY ${options.field} ${options.orderBy.toUpperCase()}
    `
    let movies = []
    db.each(gql, function(err, row) {
      if (err) {
        callback(err)
      } else {
        row.released = changeDateFormat(row.released)
        movies.push(row)
      }
    }, function(err) {
      if (err) {
        callback(err)
      } else {
        callback(null, movies)
      }
    })
  }
  
}

module.exports = Review