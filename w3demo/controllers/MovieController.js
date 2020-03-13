const Movie = require("../models/Movie");
const Ticket = require("../models/Ticket");
class MovieController {
  static view(id) {
    Movie.findById(id, (err, movie) => {
      if (err) {
        console.log(err);
      } else {
        if (movie) {
          Ticket.findAll(
            {
              where: {
                key: "movie_id",
                value: id
              }
            },
            function(err, tickets) {
              if (err) {
                console.log(err);
              } else {
                MovieView.showSingular(movie, tickets);
              }
            }
          );
        } else {
          console.log("film tidak ditemukan");
        }
      }
    });
  }
}

module.exports = MovieController;
