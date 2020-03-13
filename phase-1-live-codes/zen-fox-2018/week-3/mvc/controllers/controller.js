const Show = require('./showController');
const Transaction = require('./transaction');

class Controller {
  static menu(command) {
    switch (command[0]) {
      case 'shows':
        switch (command[1]) {
          case 'add':
            Show.add(command[2], command[3], command[4]);
            break;
          case 'findBy':
            Show.findBy(command[2], command[3]);
            break;
          case 'toggleAvailability':
            Show.toggleAvailability(command[2])
            break;
          default:
            break;
        }
        break;
      case 'transaction':
        switch (command[1]) {
          case 'buyTicket':
            Transaction.buyTicket(command[2], command[3], command[4])
            break;
          case 'top3Audience':
            Transaction.top3Audience();
            break;
          case 'refundTicket':
            Transaction.refundTicket(command[2], command[3])
            break;
          default:
            break;
        }
        break;
      default:

    }
  }
}

module.exports = Controller
