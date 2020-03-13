const command = process.argv[2]
const parameters = process.argv.slice(3)
const Controller = require('./controller')

console.log(command)

switch(command){
  case 'customer:all':
    Controller.customers()
    break

  case 'customer:delete':
    Controller.deleteCustomer(parameters[0]) //<customerName>
    break

  case 'order:create': //<customerName> <day> <itemName> <pricePerPiece> <qty>
    Controller.createOrder(parameters[0], parameters[1], parameters[2], parameters[3], parameters[4])
    break
    
  case 'order:all': //<customerName> <day>
    Controller.orders(parameters[0], parameters[1])
    break

  case 'order:complete': //<orderId>
    Controller.completeOrder(parameters[0])
    break

  case 'order:omzet': //<day>
    Controller.omzet(parameters[0]) //<day>
    break
  default:
    console.log("please input command")
}