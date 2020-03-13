const db = require('../db/connection');

class Ticket {
  constructor(id, ticketNumber, amountOfTicket, totalInvoice, audienceId) {
    this.id = id;
    this.ticketNumber = ticketNumber;
    this.amountOfTicket = amountOfTicket;
    this.totalInvoice = totalInvoice;
    this.audienceId = audienceId;
  }
  
  static create(ticketNumber, amountOfTicket, totalInvoice, audienceId, callback) {
    let query =
      `
        INSERT INTO Tickets
        VALUES (null, '${ticketNumber}', ${amountOfTicket}, ${totalInvoice}, ${audienceId})
      `
    db.run(query, function(err) {
      if (!err) {
        callback();
      } else {
        callback(err)
      }
    })
  }

  static findBy(columnName, value, callback) {
    let query = `
          SELECT *
          FROM Tickets
          WHERE ${columnName} = '${value}'
        `
    db.all(query, function(err, rows) {
      if (!err) {
        let data = [];

        if (rows.length > 0) {
          rows.forEach(row => {
            data.push(new Ticket(row.id, row.ticketNumber, row.amountOfTicket, row.totalInvoice, row.audienceId));
          })
        }

        callback(null, data);
      } else {
        callback(err, null);
      }
    })
  }

  static remove(id, callback) {
    let query = `DELETE FROM Tickets WHERE id = ${id}`

    db.run(query, function(err) {
      if (!err) {
        callback(null, this.changes);
      } else {
        callback(err, null);
      }
    })
  }
}

module.exports = Ticket
