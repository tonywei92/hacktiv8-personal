const Show = require('../models/show');
const Audience = require('../models/audience');
const Ticket = require('../models/ticket');
const View = require('../views/view');

class Transaction {
  static buyTicket(showId, email, amount) {
    Show.findBy('id', showId, function(err, rows) {
      if (!err) {
        if (rows.length > 0) {
          Audience.findBy('email', email, function(err, audiences) {

            if (!err) {
              if (audiences.length > 0) {
                let total = amount * rows[0].price;

                if (audiences[0].type === 'gold') {
                  let diskon = total * 0.15
                  total -= diskon;
                } else if (audiences[0].type === 'silver') {
                  let diskon = total * 0.05
                  total -= diskon;
                }

                if (audiences[0].balance < total) {
                  View.showErr('Mohon maaf saldo anda tidak cukup');
                } else {

                  //CREATE TIKET
                  let ticketNumber = Transaction.generateTicketNumber(`${audiences[0].lastName}${audiences[0].type}`);
                  Ticket.create(ticketNumber, amount, total, audiences[0].id, function(err) {
                    if (!err) {
                      //UPDATE BALANCE
                      Audience.update(audiences[0].balance - total, audiences[0].id, function(err) {
                        if (!err) {
                          View.showInfo(`Tiket telah terbeli! Nomor tiket anda adalah ${ticketNumber}.
                              Saldo saat ini ${audiences[0].balance - total}
                            `)
                        } else {
                          View.showErr(err);
                        }
                      })

                    } else {
                      View.showErr(err);
                    }
                  })
                }
              } else {
                View.showErr('Member tidak ditemukan');
              }
            } else {
              View.showErr(err)
            }
          })
        } else {
          View.showErr('Show tidak ditemukan');
        }
      } else {
        View.showErr(err)
      }
    })
  }

  static refundTicket(ticketNumber, email) {
    Ticket.findBy('ticketNumber', ticketNumber, function(err, tickets) {
      if (!err) {
        if (tickets.length > 0) {
          Audience.findBy('id', tickets[0].audienceId, function(err, audience) {
            if (!err) {
              if (email === audience[0].email) {
                //REFUND
                Ticket.remove(tickets[0].id, function(err, changes) {
                  if (!err) {
                    if (changes > 0) {
                      //UPDATE BALANCE
                      let balance = audience[0].balance + tickets[0].totalInvoice;

                      Audience.update(balance, audience[0].id, function(err, updated) {
                        if (!err) {
                          if (updated > 0) {
                            View.showInfo(`Ticket dengan nomor ${ticketNumber} telah dibatalkan. Saldo anda menjadi ${balance}`);
                          }
                        } else {
                          View.showErr(err);
                        }
                      })
                    }
                  } else {
                    View.showErr(err);
                  }

                })
              } else {
                View.showErr('Email anda tidak sesuai dengan data Nomor tiket')
              }
            } else {
              View.showErr(err)
            }
          })
        } else {
          View.showErr('Nomor tiket tidak ditemukan');
        }
      } else {
        View.showErr(err)
      }
    })
  }

  static generateTicketNumber(member) {
    let rand = Math.round(Math.random()*9999)
    return `TIX${member}${rand}`
  }

  static top3Audience() {
    Audience.getTopThree(function(err, data) {
      if (!err) {
        View.showInfo(data);
      } else {
        View.showErr(err);
      }
    })
  }
}

module.exports = Transaction
