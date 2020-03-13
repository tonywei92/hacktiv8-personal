const db = require('../helpers/sqlite3db')
const { changeDateFormat } = require('../helpers/changeDateFormat')

class Movie {
  
  constructor(options) {
    this.name = options.name
    this.duration = options.duration
    this.releasedDate = new Date(options.date)
    this.nowPlaying = 1
  }

  save(callback) {
    const gql = `
      INSERT INTO Movies (name, duration, releasedDate, nowPlaying)
      VALUES ('${this.name}', ${Number(this.duration)}, '${this.releasedDate}', '${this.nowPlaying}')  
    `
    db.run(gql, function(err) {
      if (err) {
        callback(err)
      } else {
        callback(null, this)
      }
    })
    db.close()
  }

  static update({ id }, options, callback) {
    const gql = `
      SELECT * from Movies where id = ${id}
    `
    if ( typeof options === 'function' ) {
      callback = options
      db.get(gql, function(err, row) {
        if (err) {
          callback(err)
        } else {
          if ( row ) {
            let toggle = 1
            if ( row.nowPlaying === toggle ) {
              toggle = 0
            }
            const updateGql = `
              UPDATE Movies
              SET nowPlaying = ${toggle}
              WHERE id = ${id}
            `
            db.run(updateGql, function(err) {
              if (err) {
                callback(err)
              } else {
                callback(null, {
                  name: row.name,
                  nowPlaying: toggle
                })
              }
            })
          } else {
            callback(null, null)
          }
        }
      })
    }
    
    db.close()
  }

  static findOne(option, callback) {
    const searchGql = `
      SELECT * FROM Movies
      WHERE ${option.field} = ${option.value}
    `
    db.get(searchGql, function(err, row) {
      if (err) {
        callback(err)
      } else {
        callback(err, row)
      }
    })
  }

  static find(options, callback) {
    const gql = `
      SELECT 
      Movies.name AS title,
      Movies.duration AS duration,
      AVG(Reviews.rating) AS rating,
      COUNT(Reviews.description) AS totalReviewer,
      Movies.releasedDate AS released
      FROM Movies
      LEFT JOIN Reviews ON Movies.id = Reviews.movieId
      WHERE nowPlaying = 1
      GROUP BY Movies.name
      ORDER BY ${options.field} ${options.orderBy}
      LIMIT 3
    `
    let movies = []
    let index = 0
    db.each(gql, function(err, row) {
      if (err) {
        callback(err)
      } else {
        index += 1
        let obj = {
          no: index,
          ...row
        }
        if ( !obj.rating ) {
          obj.rating = 0
        }
        obj.duration = `${obj.duration} minutes`
        obj.released = changeDateFormat(obj.released)
        movies.push(obj)
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

module.exports = Movie