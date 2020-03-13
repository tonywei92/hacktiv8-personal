function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}
function clearScreen () {
  console.clear();
}

function animation(board, start, finish, floor, counter) {
  let newBoard = []
  for(let i = 0; i < board.length; i++) {
    let line = []
    for(let j = 0; j < board[i].length; j++) {
      if(i === start.pos[0] && j === start.pos[1]) {
        line.push(start.name)
      } else if(i === finish.pos[0] && j === finish.pos[1]) {
        line.push(finish.name)
      } else {
        if(board[i][j] === start.name) {
          board[i][j] = ' '  
        }
        line.push(board[i][j])
      }
    }
    newBoard.push(line)
  }
  console.log(`this in on the floor: ${floor}`)
  console.log(newBoard)
  console.log(`step: ${counter}`)
}

function checkFloor(stage, search, finish, floor, counter) {
  let start = []
  let end = []
  for(let i = 0; i < stage.length; i++) {
    for(let j = 0; j < stage[i].length; j++) {
      if(stage[i][j] === search) start = [i, j]
      else if(stage[i][j] === finish) end = [i, j]
    }
  } 
  let step = Math.abs(end[0] - start[0]) + Math.abs(end[1] - start[1])

  // animation
  while(start[0] !== end[0] || start[1] !== end[1]) {
    if(start[0] > end[0]) {
      start[0] -= 1
    } else if(start[0] < end[0]) {
      start[0] += 1
    } else if(start[1] > end[1]) {
      start[1] -= 1
    } else if(start[1] < end[1]) {
      start[1] += 1
    }
    counter++

    clearScreen()
    animation(stage, {name: '*', pos: start}, {name: finish, pos: end}, floor, counter)
    sleep(500)
  }

  return step
}

function escapeRooms(board) {
  let totalStep = 0
  for(let i = 0; i < board.length; i++) {
    let floor = board.length - i
    if(i === 0) { // first floor
      totalStep += checkFloor(board[i], '*', 'L', floor, totalStep)
    } else if(i === board.length - 1) { // last floor
      totalStep += checkFloor(board[i], 'L', 'F', floor, totalStep)
    } else {
      totalStep += checkFloor(board[i], 'S', 'L', floor, totalStep)
    }
  }
  return `Anda memerlukan ${totalStep} untuk keluar dari bangunan ini`
}

const stage1 = [
  [
    ['*', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'L', ' '],
    [' ', ' ', ' ', ' ', ' ']
  ],
  [
    [' ', ' ', ' ', ' ', ' '],
    [' ', 'S', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'L']
  ],
  [
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'L', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'F']
  ]
]
console.log(escapeRooms(stage1))
// Anda memerlukan 16 untuk keluar dari bangunan ini

const stage2 = [
  [
    ['*', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', 'L']
  ],
  [
    ['L', ' ', ' '],
    [' ', ' ', 'S'],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ],
  [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', 'S', ' '],
    ['L', ' ', ' '],
  ],
  [
    ['L', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', 'S', ' '],
  ],
  [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', 'S', ' '],
    [' ', ' ', 'L'],
  ],
  [
    ['L', 'S', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ],
  [
    ['L', ' ', ' '],
    [' ', ' ', ' '],
    [' ', 'S', ' '],
    [' ', ' ', ' '],
  ],
  [
    [' ', 'S', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', 'L', ' '],
  ],
  [
    [' ', ' ', ' '],
    ['F', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', 'L'],
  ]
]
// console.log(escapeRooms(stage2))
// Anda memerlukan 27 untuk keluar dari bangunan ini