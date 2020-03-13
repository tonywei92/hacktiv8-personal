const input = process.argv.slice(2)
const Controller = require('./controller')

switch (input[0]) {
  case 'register':
    Controller.register(input)
    break;

  case 'job done':
    Controller.jobDone(input)
    break

  case 'evaluation':
    Controller.evaluation(input)
    break;
  
  default:
    break;
}

// Employee.create({name: 'taik', salary: 1000}, function (err, statement){
//   err?console.log(err) : console.log(statement);
// })