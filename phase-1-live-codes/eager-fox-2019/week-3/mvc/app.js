const input = process.argv.slice(2)
const Controller = require('./controller/Controller')

switch (input[0]) {
  case 'register':
    Controller.register({
      TeamId: input[1],
      name: input[2],
      position: input[3],
      rating: input[4],
      monthlySalary: input[5]
    })
    break;
  case 'sell player':
    Controller.sellPlayer({
      teamId: Number(input[1]),
      playerId: Number(input[2])
    })
    break;
  case 'payday':
    Controller.payday(Number(input[1]))
  break;
  case `showPlayer`:
    Controller.showPlayers()
  break;
  case `showTeam` :
    Controller.showTeam()
  break;
  default:
    break;
}