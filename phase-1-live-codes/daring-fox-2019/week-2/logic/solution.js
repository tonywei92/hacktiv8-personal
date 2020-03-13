function chessBoardToArray(chessBoard) {
  return chessBoard.slice(1).map(row => row.slice(1))

  // uncomment if input is string
  // return chessBoard
  //   .split('\n')
  //   .filter(row => !!(row && row.includes('|')))
  //   .map(row => row.slice(row.indexOf('|') + 2, -2).split(' | '))
}

function getKingAndQueenPos(board) {
  let kingPos, queenPos
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'K') kingPos = [i, j]
      else if (board[i][j] === 'Q') queenPos = [i, j]
    }
  }
  return [kingPos, queenPos]
}

function getAroundKing(kingPos) {
  return [[1, -1], [0, -1], [-1, -1], [1, 0], [-1, 0], [1, 1], [0, 1], [-1, 1]]
    .map(move => [kingPos[0] + move[0], kingPos[1] + move[1]])
    .filter(pos => pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8)
}

function isInQueenRange(queenPos, checkedPos) {
  return !!(
    queenPos[0] === checkedPos[0]
    || queenPos[1] === checkedPos[1]
    || Math.abs(queenPos[0] - checkedPos[0]) === Math.abs(queenPos[1] - checkedPos[1])
  )
}

function convertToBoardCoordinate(pos) {
  return String.fromCharCode(pos[1] + 65) + String(8 - pos[0])
}

function escape(chessBoard) {
  let boardArray = chessBoardToArray(chessBoard)
  let [kingPos, queenPos] = getKingAndQueenPos(boardArray)

  return getAroundKing(kingPos)
    .filter(checkedPos => !isInQueenRange(queenPos, checkedPos))
    .map(convertToBoardCoordinate)
}



// let game1 = `
//      A   B   C   D   E   F   G   H  
//    ---------------------------------
//  8 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  7 |   |   | K |   |   |   |   |   |
//    ---------------------------------
//  6 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  5 |   |   |   |   | Q |   |   |   |
//    ---------------------------------
//  4 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  3 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  2 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  1 |   |   |   |   |   |   |   |   |
//    ---------------------------------
// `
let game1 = [
  [ ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ],
  [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '7', ' ', ' ', 'K', ' ', ' ', ' ', ' ', ' ' ],
  [ '6', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '5', ' ', ' ', ' ', ' ', 'Q', ' ', ' ', ' ' ],
  [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '3', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '2', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] 
]

console.log(escape(game1)) // [ 'B6', 'B7', 'C6', 'C8', 'D7', 'D8' ]

// let game2 = `
//      A   B   C   D   E   F   G   H  
//    ---------------------------------
//  8 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  7 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  6 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  5 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  4 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  3 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  2 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  1 |   |   |   |   |   | Q |   | K |
//    ---------------------------------
// `
let game2 = [
  [ ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ],
  [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '7', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '6', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '3', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '2', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '1', ' ', ' ', ' ', ' ', ' ', 'Q', ' ', 'K' ] 
]
console.log(escape(game2)) // [ 'H2' ]

// let game3 = `
//      A   B   C   D   E   F   G   H  
//    ---------------------------------
//  8 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  7 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  6 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  5 |   |   |   |   |   | Q |   |   |
//    ---------------------------------
//  4 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  3 |   |   |   |   |   | K |   |   |
//    ---------------------------------
//  2 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  1 |   |   |   |   |   |   |   |   |
//    ---------------------------------
// `
let game3 = [
  [ ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ],
  [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '7', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '6', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '5', ' ', ' ', ' ', ' ', ' ', 'Q', ' ', ' ' ],
  [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '3', ' ', ' ', ' ', ' ', ' ', 'K', ' ', ' ' ],
  [ '2', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] 
]
console.log(escape(game3)) // [ 'E2', 'E3', 'G2', 'G3' ]

// let game4 = `
//      A   B   C   D   E   F   G   H  
//    ---------------------------------
//  8 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  7 |   |   | Q |   |   |   |   | K |
//    ---------------------------------
//  6 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  5 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  4 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  3 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  2 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  1 |   |   |   |   |   |   |   |   |
//    ---------------------------------
// `
let game4 = [
  [ ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ],
  [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '7', ' ', ' ', 'Q', ' ', ' ', ' ', ' ', 'K' ],
  [ '6', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '3', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '2', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] 
]
console.log(escape(game4)) // [ 'G6', 'G8', 'H6', 'H8' ]

// let game5 = `
//      A   B   C   D   E   F   G   H  
//    ---------------------------------
//  8 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  7 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  6 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  5 |   |   |   |   | Q |   |   |   |
//    ---------------------------------
//  4 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  3 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  2 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  1 | K |   |   |   |   |   |   |   |
//    ---------------------------------
// `
let game5 = [
  [ ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ],
  [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '7', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '6', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '5', ' ', ' ', ' ', ' ', 'Q', ' ', ' ', ' ' ],
  [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '3', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '2', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '1', 'K', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ] 
]
console.log(escape(game5)) // [ 'A2', 'B1' ]

// let game6 = `
//      A   B   C   D   E   F   G   H  
//    ---------------------------------
//  8 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  7 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  6 |   | K |   |   |   |   |   |   |
//    ---------------------------------
//  5 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  4 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  3 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  2 |   |   |   |   |   |   |   |   |
//    ---------------------------------
//  1 |   | Q |   |   |   |   |   |   |
//    ---------------------------------
// `
let game6 = [
  [ ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' ],
  [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '7', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '6', ' ', 'K', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '3', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '2', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '1', ' ', 'Q', ' ', ' ', ' ', ' ', ' ', ' ' ] 
]
console.log(escape(game6)) // [ 'A5', 'A6', 'A7', 'C5', 'C6', 'C7' ]
