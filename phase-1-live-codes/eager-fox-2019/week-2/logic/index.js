let advancedBoard = [
  [" ", " ", " ", " ", " ", "o", " ", " "],
  [" ", " ", " ", " ", " ", "x", " ", " "],
  [" ", " ", "o", " ", " ", "o", " ", " "],
  [" ", " ", "x", "o", "o", "x", "o", "o"],
  ["o", "x", "o", "x", "x", " ", "x", "x"],
  [" ", " ", "x", " ", " ", "x", "o", "o"],
  [" ", " ", "x", " ", " ", "o", " ", " "],
  [" ", " ", "o", " ", " ", "x", " ", " "],
]

let dummyBoard = [
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", "o", "x", " ", " ", " "],
  [" ", " ", " ", "x", "o", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
]

const move = (board, symbol, [row, col]) => {
  if(board[row][col] !== " ") {
    console.log("Oops you cannot put in there")
    return board
  }
  let counter = 0,
      changeState = {
        left: {
          reversed: [],
          possible: []
        },
        right: {
          reversed: [],
          possible: []
        },
        up: {
          reversed: [],
          possible: []
        },
        down: {
          reversed: [],
          possible: []
        },
      },
      reversedSymbol = {
        "x": "o",
        "o": "x"
      }
  while(true) {
    let leftIdx = col - counter
        rightIdx = col + counter,
        upIdx = row - counter,
        downIdx = row + counter,
        possibleRight = rightIdx < board.length && changeState.right.possible.length === 0,
        possibleLeft = leftIdx >= 0 && changeState.left.possible.length === 0,
        possibleUp = upIdx >= 0 && changeState.up.possible.length === 0,
        possibleDown = downIdx < board.length && changeState.down.possible.length === 0
    if(possibleRight) {
      let getSymbol = board[row][rightIdx]
      if (getSymbol === reversedSymbol[symbol]) {
        changeState.right.reversed.push([
          row, rightIdx
        ])
      } else if(getSymbol === symbol) {
        changeState.right.possible.push(row, rightIdx)
      } 
    } 
    if(possibleLeft) {
      let getSymbol = board[row][leftIdx]
      if (getSymbol === reversedSymbol[symbol]) {
        changeState.left.reversed.push([
          row, leftIdx
        ])
      } else if(getSymbol === symbol) {
        changeState.left.possible.push(row, leftIdx)
      }
    } 
    if(possibleDown) {
      let getSymbol = board[downIdx][col]
      if (getSymbol === reversedSymbol[symbol]) {
        changeState.down.reversed.push([
          downIdx, col
        ])
      } else if(getSymbol === symbol) {
        changeState.down.possible.push(downIdx, col)
      }
    } 
    if(possibleUp) {
      let getSymbol = board[upIdx][col]
      if (getSymbol === reversedSymbol[symbol]) {
        changeState.up.reversed.push([
          upIdx, col
        ])
      } else if(getSymbol === symbol) {
        changeState.up.possible.push(upIdx, col)
      }
    }
    if(!possibleDown && !possibleRight && !possibleUp && !possibleLeft) {
      break
    } else {
      counter += 1
    }
  }
  let canMove = false
  Object.values(changeState).forEach((state) => {
    if(state.possible.length >= 1 && state.reversed.length >= 1) {
      const [xRev, yRev] = state.possible
      const distTrue = Math.abs(row - xRev) + Math.abs(col - yRev) === state.reversed.length + 1
      if(distTrue) {
        state.reversed.forEach(([x, y]) => {
          canMove = true
          board[x][y] = symbol
        })
      }
      
    }
  })
  if(canMove) {
    board[row][col] = symbol
    console.log(board)
  } else {
    console.log("Oops you cannot put in there")
  }
} 
console.log(dummyBoard)
move(dummyBoard, "o", [4, 3])
/*
  Oops you cannot put in there
*/
move(dummyBoard, "o", [4, 2])
/*
  [ 
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', 'o', 'x', ' ', ' ', ' ' ],
    [ ' ', ' ', 'o', 'o', 'o', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] 
  ]
*/

move(dummyBoard, "x", [5, 4])
/*
  [ 
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', 'o', 'x', ' ', ' ', ' ' ],
    [ ' ', ' ', 'o', 'o', 'x', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] 
  ]
*/
move(dummyBoard, "o", [3, 5])
/*
  [ 
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', 'o', 'o', 'o', ' ', ' ' ],
    [ ' ', ' ', 'o', 'o', 'x', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] 
  ]
*/
move(dummyBoard, "x", [4, 1])
/*
  [ 
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', 'o', 'o', 'o', ' ', ' ' ],
    [ ' ', 'x', 'x', 'x', 'x', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] 
  ]
*/

move(advancedBoard, "o", [4, 5])

/*
  [ 
    [ ' ', ' ', ' ', ' ', ' ', 'o', ' ', ' ' ],
    [ ' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ' ],
    [ ' ', ' ', 'o', ' ', ' ', 'o', ' ', ' ' ],
    [ ' ', ' ', 'x', 'o', 'o', 'o', 'o', 'o' ],
    [ 'o', 'x', 'o', 'o', 'o', 'o', 'x', 'x' ],
    [ ' ', ' ', 'x', ' ', ' ', 'o', 'o', 'o' ],
    [ ' ', ' ', 'x', ' ', ' ', 'o', ' ', ' ' ],
    [ ' ', ' ', 'o', ' ', ' ', 'x', ' ', ' ' ] 
  ]
*/