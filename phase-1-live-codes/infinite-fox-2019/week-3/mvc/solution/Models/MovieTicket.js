const db = require("../connection");

class MovieTicket {
  static findAll(params, cb) {
    db.all(
      `SELECT * FROM movieTickets WHERE ${params.where.key} = ?`,
      params.where.value,
      cb
    );
  }

  static createTicketMass(
    qty,
    movieId,
    movieCode,
    customerName,
    phoneNumber,
    cb
  ) {
    db.serialize(() => {
      const stmt = db.prepare(`INSERT INTO movieTickets
      (movieId, ticketCode, customerName, phoneNumber) VALUES (?,?,?,?)`);
      for (let i = 0; i < qty; i++) {
        stmt.run([
          movieId,
          this.randomTicketCode(movieCode),
          customerName,
          phoneNumber
        ]);
      }
      stmt.finalize(cb);
    });
  }

  static randomTicketCode(movieCode) {
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return movieCode + result;
  }

  static delete(params, cb) {
    db.run(
      `DELETE FROM movieTickets WHERE ${params.where.key} = ?`,
      params.where.value,
      cb
    );
  }
}

module.exports = MovieTicket;
