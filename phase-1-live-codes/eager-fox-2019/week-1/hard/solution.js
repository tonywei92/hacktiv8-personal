function generateObstacle(num) {
  const limit = num * 2
  const output = []

  for (let i = 0; i < limit; i++) {
    let randomPosition = Math.floor(Math.random() * 8)
    for (let j = 0; j < limit; j++) {
      if (!output[j]) output[j] = []
      if (i % 2 === 1) {
        if (j === randomPosition) {
          output[j][i] = ' '
        } else {
          output[j][i] = 'I'
        }
      } else {
        output[j][i] = ' '
      }
    }
  }
  return output
}

function initGame(firstPosition, obstacles, userInput) {
  let position = obstacles.length - firstPosition
  obstacles[position][0] = '@'
  userInput = userInput.split(',')
  let lastPos
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] !== '-') {
      if (i !== 0) obstacles[lastPos[0]][lastPos[1]] = ' '
      obstacles[position][i] = '@'
      const limit = userInput[i][userInput[i].length - 1]
      console.log(obstacles)
      animate()
      for (let j = 0; j < limit; j++) {
        obstacles[position][i] = ' '
        if (userInput[i].includes('up')) {
          position--
        } else position++
        if(!obstacles[position]) {
          console.log(obstacles)
          console.log('Your bird goes out of arena! You Lose!')
          return
        } else {
          obstacles[position][i] = '@'
          console.log(obstacles)
          animate()
        }
      }
    } else {
      if (obstacles[lastPos[0]][i] === 'I') {
        obstacles[lastPos[0]][i] = '@'
        obstacles[lastPos[0]][lastPos[1]] = ' '
        console.log(obstacles)
        console.log('Ooops You Lose !')
        return
      }
      obstacles[lastPos[0]][lastPos[1]] = ' '
      obstacles[lastPos[0]][i] = '@'
      console.log(obstacles)
      animate()
    }
    lastPos = [position, i]
    if (i === userInput.length - 1) console.log('You Win The Game !')
  }
}

const soal = [
  [' ', 'I', ' ', ' ', ' ', 'I', ' ', 'I'],
  [' ', 'I', ' ', 'I', ' ', 'I', ' ', ' '],
  [' ', 'I', ' ', 'I', ' ', 'I', ' ', 'I'],
  [' ', 'I', ' ', 'I', ' ', 'I', ' ', 'I'],
  [' ', ' ', ' ', 'I', ' ', 'I', ' ', 'I'],
  [' ', 'I', ' ', 'I', ' ', 'I', ' ', 'I'],
  [' ', 'I', ' ', 'I', ' ', 'I', ' ', 'I'],
  [' ', 'I', ' ', 'I', ' ', ' ', ' ', 'I']
]
const soal2 = generateObstacle(4)
initGame(2, soal, 'up2,-,up4,-,down7,-,up6,-')

function reset_board() {
  console.clear("\x1B[2J")
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function animate() {
  sleep(500)
  reset_board()
}