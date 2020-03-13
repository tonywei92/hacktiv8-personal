const Ticket = require('../model/ticket');
const View = require('../view.js')

class TicketController {
  static add(name, price, schedule) {
    Ticket.insert(name, price, new Date(schedule), function(err, id) {
      if (!err) {
        View.showInfo(`Successfully added a ticket with ID: ${id}`)
      } else {
        View.showError(err);
      }
    })
  }

  static findBy(column_name, value) {
    Ticket.findBy(column_name, value, function(err, rows) {
      if (!err) {
        View.showInfo(rows);
      } else {
        View.showError(err);
      }
    })
  }

  static toggleAvailability(id) {
    Ticket.toggleAvailability(id, function(err) {
      if (!err) {
        Ticket.findBy("id", id, function(err, rows) {
          if (!err) {
            if (rows[0].isAvailable === 0) {
              View.showInfo(`${rows[0].name} is now unavailable`)
            } else {
              View.showInfo(`${rows[0].name} is now available`)
            }
          } else {
            View.showError(err);
          }
        })
        // View.showInfo("Berhasil");
      } else {
        console.log(err);
      }
    })
  }
}


module.exports = TicketController
