class MovieView {
  static showSingular(movie, tickets) {
    console.log(`id: ${movie.id}, title: ${movie.name}`);
    for (let i = 0; i < tickets.length; i++) {
      console.log(`${tickets[i].code} | ${tickets[i].created_at}`);
    }
  }

  static showMany() {}
}

module.exports = MovieView;
