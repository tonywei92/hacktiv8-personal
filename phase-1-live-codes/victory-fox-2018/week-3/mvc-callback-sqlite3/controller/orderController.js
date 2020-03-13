const Order = require('../model/order');
const View = require('../view.js');
const Ticket = require('../model/ticket');

class OrderController {

  static add(ticketId) {
    Ticket.findBy("id", ticketId, function(err, rows) {
      if (!err) {
        if (rows.length === 0) {
          View.showError("Ticket not Found")
        } else if (rows[0].isAvailable === 0) {
          View.showError("Ticket is not available");
        } else {
          Order.insert(ticketId, function(err, id) {
            if (!err) {
              View.showInfo(`Successfully added a order with ID: ${id}`)
            } else {
              View.showError(err);
            }
          })
        }
      } else {
        View.showError(err);
      }
    })

  }

  static remove(id) {
    Order.remove(id, function(err) {
      if (!err) {
        console.log(`Successfully deleted an order with ID: ${id}`);
      } else {
        console.log(err);
      }
    })
  }
}


module.exports = OrderController
