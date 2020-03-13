function generateBoard(rows, cols) {
  let board = []
  for (let i = 0; i < rows; i++) {
    board[i] = []
    for (let j = 0; j < cols; j++) {
      board[i].push(['↑', '→', '↓', '←'][Math.floor(Math.random() * 4)])
    }
  }
  return board
}

function inSamePos(chars) {
  let meetings = []
  for (let {char, pos} of chars) {
    for (let { char: char2, pos: pos2 } of chars) {
      if (char !== char2 && pos[0] === pos2[0] && pos[1] === pos2[1]) {
        meetings.push([char, char2])
      }
    }
  }
  return removeDuplicates(meetings)
}

function faceToFace(board, chars) {
  let meetings = []
  for (let {char, pos} of chars) {
    let nextPos = getNextPos(board, pos[0], pos[1])
    for (let { char: char2, pos: pos2 } of chars) {
      let nextPos2 = getNextPos(board, pos2[0], pos2[1])
      if (char !== char2 && pos[0] === nextPos2[0] && pos[1] === nextPos2[1] && pos2[0] === nextPos[0] && pos2[1] === nextPos[1]) {
        meetings.push([char, char2])
      }
    }
  }
  return removeDuplicates(meetings)
}

function removeDuplicates(array) {
  let output = []
  outer: for (let [x, y] of array) {
    for (let [p, q] of output) {
      if ((x === p && y === q) || (x === q && y === p)) {
        continue outer
      }
    }
    output.push([x, y])
  }
  return output
}

function getNextPos(board, i, j) {
  const movement = { '↑': [-1, 0], '→': [0, 1], '↓': [1, 0], '←': [0, -1] }
  let move = movement[board[i][j]]
  let [m, n] = [i + move[0], j + move[1]]
  return (board[m] && board[m][n]) ? [m, n] : [i, j]
}

function whoMeetWhom(board, maxSteps) {
  let cols = board[0].length
  let rows = board.length
  
  let chars = []
  
  for (let [char, i, j] of [['A', 0, 0], ['B', 0, cols - 1], ['C', rows - 1, 0], ['D', rows - 1, cols - 1]]) {
    chars.push({char, pos: [i, j]})
  }

  let meetings = []
  for (var step = 1; step <= maxSteps; step++) {
    for (let each of chars) {
      each.pos = getNextPos(board, each.pos[0], each.pos[1])
    }

    let meetingInSamePos = inSamePos(chars)
    let meetingfaceToFace = faceToFace(board, chars)
    if (meetingInSamePos.length > 0) {
      meetings = meetings.concat(meetingInSamePos)
    } else if (meetingfaceToFace.length > 0 && step < maxSteps) {
      meetings = meetings.concat(meetingfaceToFace)
      step++
    }

    if (meetings.length > 0) {
      break
    }
  }

  if (meetings.length > 0) {
    console.log(`${meetings.map(([a, b]) => `${a} meets ${b}`).join(', ')} after ${step} steps`)
  } else {
    console.log('no one meets each other')
  }
}

let board1 = generateBoard(5, 4)
// console.log(board1)
// whoMeetWhom(board1, 6)

let board2 = [
  [ '↓', '←', '→', '↑' ],
  [ '→', '↓', '←', '→' ],
  [ '↓', '↓', '↑', '↓' ],
  [ '←', '↑', '→', '↑' ],
  [ '←', '↑', '←', '←' ]
]
console.log(board2)
whoMeetWhom(board2, 6)

let board3 = [
  [ '↓', '←', '→', '↑' ],
  [ '↓', '↓', '←', '→' ],
  [ '→', '↓', '↑', '↓' ],
  [ '↑', '↑', '→', '↑' ],
  [ '↑', '↑', '←', '←' ]
]
console.log(board3)
whoMeetWhom(board3, 4)

