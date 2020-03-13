const command = process.argv[2]
const argument = process.argv.slice(3)
const Controller = require("./controllers/Controller")

switch (command) {
  case "order:all":
    // <customerName> <day>
    Controller.showAllOrder(argument[0], argument[1])
    break;
  case "order:complete":
    // order<id>
    Controller.UpdateOrder(argument[0])
    break;
  case "order:create":
  // <customerName> <day> <itemName> <pricePerItem> <quantity>
    Controller.createOrder(argument[0], argument[1], argument[2], argument[3], [4] )
    break;
  case "order:omzet":
  // <day>
    break;
  case "order:delete":
  // <customerName></customerName>
    break;
}