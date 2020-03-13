const input = process.argv.slice(2)
const property = require('./controllers/Property')
const setup = require('./setup/setup')

switch (input[0]) {
  case 'setup':
    setup()
    break;
  case 'property/add':
    property.add(input.slice(1))
    break;
  case 'property/sale':
    property.sale(input.slice(1))
    break;
  case 'property/soldout':
    property.soldout(input.slice(1))
    break;
  case 'property/buy':
    property.buy(input.slice(1))
    break;

  default:
    break;
}


