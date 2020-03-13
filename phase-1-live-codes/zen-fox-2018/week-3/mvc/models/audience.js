const db = require('../db/connection');

class Audience {
  constructor(id, firstName, lastName, age, email, type, balance) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.type = type;
    this.balance = balance;
  }

  static findBy(columnName, value, callback) {
    let query = `
          SELECT *
          FROM Audiences
          WHERE ${columnName} = "${value}"`

    db.all(query, function(err, rows) {
      if (!err) {
        let data = [];
        if (rows.length > 0) {
          rows.forEach(row => {
            data.push(new Audience(row.id, row.firstName, row.lastName, row.age,
              row.email, row.type, row.balance))
          })
        }
        callback(null, data);
      } else {
        callback(err, null);
      }
    })
  }

  static update(balance, id, callback) {
    let query = `UPDATE Audiences SET balance = ${balance} WHERE id = ${id}`;

    db.run(query, function(err) {
      if (!err) {
        callback(null, this.changes);
      } else {
        callback(err, null);
      }
    })
  }

  static getTopThree(callback) {
    let query = `
      SELECT
        A.firstName || ' ' || A.lastName as Fullname,
        A.type,
        A.email,
        SUM(T.totalInvoice) as totalBelanja
      FROM Audiences AS A, Tickets AS T
      WHERE A.id = T.audienceId
      GROUP BY A.id
      ORDER BY totalBelanja DESC
      limit 3
    `

    db.all(query, function(err, rows) {
      if (!err) {
        callback(null, rows);
      } else {
        callback(err, null);
      }
    })
  }
}

module.exports = Audience
