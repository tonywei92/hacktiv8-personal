class MovieView {
  static showAll(movies) {
    console.log("Movie List");
    for (let i = 0; i < movies.length; i++) {
      console.log(
        `[${movies[i].status}] ${movies[i].name} (${movies[i].booked}/${movies[i].maxSeats})`
      );
    }
  }

  static show(movie) {
    console.log(`id: ${movie[0].id}, ${movie[0].name}`);
    console.log(`Ticket list:`);
    for (let i = 0; i < movie.length; i++) {
      console.log(
        `${i + 1}. ${movie[i].ticketCode} - ${
          movie[i].customerName
        }, contact: ${movie[i].phoneNumber}`
      );
    }
  }
}

module.exports = MovieView;
