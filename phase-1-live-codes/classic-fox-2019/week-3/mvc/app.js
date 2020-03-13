const PriceController = require('./controllers/price')
const UserController = require('./controllers/user')

let command = process.argv[2]
let args = process.argv.slice(3)

switch (command) {
  case "price":
    PriceController.current()
    break;
  case "price:set":
    PriceController.setPrice(...args)
    break;
  case "register":
    UserController.register(...args)
    break;
  case "user:list":
    UserController.list(...args)
    break;
  case "user:deposit":
    UserController.fund(args[0], args[1], Number(args[2]))
    break;
  case "user:withdraw":
    UserController.fund(args[0], args[1], Number(args[2]) * -1)
    break;
  case "user:buy":
    UserController.makeTransaction(args[0], Number(args[1]) )
    break;
  case "user:sell":
    UserController.makeTransaction(args[0], Number(args[1]) * -1)
    break;
  default:
    break;
}