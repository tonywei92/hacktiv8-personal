function generateBoard(num) {
  if (num >= 2 && num <= 8) {
    const board = []
    for (let i = 0; i < num; i++) {
      const inside = []
      for (let j = 0; j < num; j++) {
        inside.push('*')
      }
      board.push(inside)
    }
    return board
  } else {
    console.log('Invalid input parameter');
  }
}

function generateCoordinate(pairsNumber, maxIndex = 4) {
  const kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const existPosition = []
  const coordinate = []
  const max = pairsNumber * 2
  while (existPosition.length != max) {
    let positionBooked = false
    while (!positionBooked) {
      const currentCoord = getRandomCoord(maxIndex)
      if (existPosition.length) {
        for (let i = 0; i < existPosition.length; i++) {
          if (`${existPosition[i][0]}${existPosition[i][1]}` == `${currentCoord[0]}${currentCoord[1]}`) {
            positionBooked = true
          }
        }
        if (!positionBooked) {
          positionBooked = true
          existPosition.push(currentCoord)
        }
      } else {
        positionBooked = true
        existPosition.push(currentCoord)
      }
    }
  }

  let kamusIndex = 0
  for (let i = 0; i < existPosition.length; i += 2) {
    coordinate.push({
      chara: kamus[kamusIndex],
      pos: existPosition[i]
    })
    coordinate.push({
      chara: kamus[kamusIndex],
      pos: existPosition[i + 1]
    })
    kamusIndex++
  }

  return coordinate
}

const x = [
  { chara: 'A', pos: [0, 0] },
  { chara: 'A', pos: [3, 2] },
  { chara: 'B', pos: [0, 1] },
  { chara: 'B', pos: [0, 3] },
  { chara: 'C', pos: [2, 2] },
  { chara: 'C', pos: [0, 2] },
  { chara: 'D', pos: [2, 3] },
  { chara: 'D', pos: [3, 0] }
]

//BOARDNYA dimasukin ke param kalo di readme ya
function tebakHuruf(position) {
  const board = generateBoard(4)
  const answer = x
  console.log(board)
  sleep(1000)
  clearScreen()
  let pair1 = {
    pos: '',
    char: ''
  }
  let pair2 = {
    pos: '',
    char: ''
  }
  let point = 0
  position.forEach((el, i) => {
    const currentCoord = el.split(',')
    const isExist = answer.find(el => {
      return el.pos[0] == currentCoord[0] && el.pos[1] == currentCoord[1]
    })
    let currentChar = ' '
    if (isExist) {
      currentChar = isExist.chara
    }
    board[+currentCoord[0]][+currentCoord[1]] = currentChar
    console.log(board)
    sleep(1000)
    clearScreen()
    if (i % 2 !== 0) {
      pair2.char = currentChar
      pair2.pos = currentCoord
      if ((pair1.char === pair2.char) && pair1.char !== ' ') {
        point++
      } else {
        board[pair1.pos[0]][pair1.pos[1]] = '*'
        console.log(board)
        sleep(1000)
        clearScreen()
        board[pair2.pos[0]][pair2.pos[1]] = '*'
        console.log(board)
        sleep(1000)
        clearScreen()
      }
      pair1 = {
        pos: '',
        char: ''
      }
      pair2 = {
        pos: '',
        char: ''
      }
    } else {
      pair1.char = currentChar
      pair1.pos = currentCoord
    }
  })
  console.log(board)
  console.log(`Board selesai dengan point : ${point}`)
}

function getRandomCoord(max) {
  let x = Math.floor(Math.random() * max)
  let y = Math.floor(Math.random() * max)
  return [x, y]
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function clearScreen() {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

tebakHuruf(['3,0', '2,3', '3,3', '2,1', '2,0', '1,1'])


