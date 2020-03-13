const Movie = require("../Models/Movie");
const MovieTicket = require("../Models/MovieTicket");
const MovieView = require("../Views/MovieView");
const GeneralView = require("../Views/GeneralView");
class MovieController {
  static buy(movieId, name, phone, paid, qty) {
    Movie.findOne(
      {
        where: {
          key: "id",
          value: movieId
        }
      },
      function(err, movie) {
        if (err) {
          GeneralView.showError(err);
        } else {
          if (movie) {
            if (movie.status === "OPEN") {
              MovieTicket.findAll(
                {
                  where: {
                    key: "movieId",
                    value: movieId
                  }
                },
                function(err, rows) {
                  if (err) {
                    GeneralView.showError(err);
                  } else {
                    if (rows.length + Number(qty) > movie.maxSeats) {
                      GeneralView.showError(
                        `Jumlah ticket melebihi kapasitas bioskop, sisa kursi ${movie.maxSeats -
                          rows.length}`
                      );
                    } else {
                      if (paid >= movie.price * qty) {
                        MovieTicket.createTicketMass(
                          qty,
                          movieId,
                          movie.code,
                          name,
                          phone,
                          function(err) {
                            if (err) {
                              GeneralView.showError(err);
                            } else {
                              GeneralView.showSuccess(
                                "berhasil membuat ticket"
                              );
                            }
                          }
                        );
                      } else {
                        GeneralView.showError(
                          `Maaf uang anda tidak cukup untuk membeli tiket ini. harga tiket satuan film ${movie.name} adalah Rp.${movie.price}`
                        );
                      }
                    }
                  }
                }
              );
            } else {
              GeneralView.showError("Maaf film ini sudah tidak ditayangkan");
            }
          } else {
            GeneralView.showError(`Film dengan id ${movieId} tidak tersedia`);
          }
        }
      }
    );
  }

  static all() {
    Movie.allWithCount(function(err, rows) {
      if (err) {
        GeneralView.showError(err);
      } else {
        MovieView.showAll(rows);
      }
    });
  }

  static view(id) {
    Movie.findOneWithTickets(
      {
        where: {
          key: "movies.id",
          value: id
        }
      },
      function(err, rows) {
        if (rows.length === 0) {
          GeneralView.showError("film tidak ditemukan");
        } else {
          if (err) {
            GeneralView.showError(err);
          } else {
            MovieView.show(rows);
          }
        }
      }
    );
  }

  static delete(id) {
    Movie.findOne(
      {
        where: {
          key: "id",
          value: id
        }
      },
      function(err, movie) {
        if (err) {
          GeneralView.showError(err);
        } else {
          if (movie) {
            if (movie.status === "OPEN") {
              GeneralView.showError(
                "Status film masih open, tidak dapat dihapus"
              );
            } else {
              MovieTicket.delete(
                {
                  where: {
                    key: "movieId",
                    value: id
                  }
                },
                function(err) {
                  if (err) {
                    GeneralView.showError(err);
                  } else {
                    Movie.delete(
                      {
                        where: {
                          key: "id",
                          value: id
                        }
                      },
                      function(err) {
                        if (err) {
                          GeneralView.showError(err);
                        } else {
                          GeneralView.showSuccess("Film berhasil di hapus");
                        }
                      }
                    );
                  }
                }
              );
            }
          } else {
            GeneralView.showError("film tidak ditemukan");
          }
        }
      }
    );
  }

  static close(id) {
    Movie.findOne(
      {
        where: {
          key: "id",
          value: id
        }
      },
      function(err, movie) {
        if (err) {
          GeneralView.showError(err);
        } else {
          if (movie) {
            Movie.update(
              {
                where: {
                  key: "id",
                  value: id
                },
                update: {
                  key: "status",
                  value: "CLOSED"
                }
              },
              function(err) {
                if (err) {
                  GeneralView.showError(err);
                } else {
                  GeneralView.showSuccess(
                    `berhasil menutup film dengan id ${id}`
                  );
                }
              }
            );
          } else {
            GeneralView.showError("film tidak ditemukan");
          }
        }
      }
    );
  }
}

module.exports = MovieController;
