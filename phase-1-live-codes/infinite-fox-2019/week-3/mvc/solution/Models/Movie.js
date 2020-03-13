const db = require("../connection");
class Movie {
  static findOneWithTickets(params, cb) {
    db.all(
      `SELECT * FROM movies JOIN movieTickets
                ON movies.id = movieTickets.movieId
                WHERE ${params.where.key} = ?
                `,
      [params.where.value],
      cb
    );
  }
  static findOne(params, cb) {
    db.get(
      `SELECT * FROM movies WHERE ${params.where.key} = ?`,
      [params.where.value],
      cb
    );
  }

  static allWithCount(cb) {
    db.all(
      `SELECT movies.name, movies.status, movies.maxSeats, count(movieTickets.id) as booked FROM movies
                LEFT JOIN movieTickets ON movies.id  = movieTickets.movieId
                GROUP BY movies.id`,
      cb
    );
  }

  static delete(params, cb) {
    db.run(
      `DELETE FROM movies WHERE ${params.where.key} = ?`,
      params.where.value,
      cb
    );
  }

  static update(params, cb) {
    db.run(
      `UPDATE movies SET ${params.update.key} = ? WHERE ${params.where.key} = ?`,
      [params.update.value, params.where.value],
      cb
    );
  }
}

module.exports = Movie;
