function generateChart(data) {
  const maxValueOfY = Math.max(...data.map(o => o.stock), 0) + 2
  const maxValueOfX = Math.max(...data.map(o => o.day), 0) + 2
  let board = []
  for (let i = maxValueOfY; i >= 0; i--) {
    let temp = []
    if (i !== 0) {
      temp.push(`${i}`)
    } else {
      temp.push('x')
    }
    for (let j = 1; j <= maxValueOfX; j++) {
      if ( i !== 0) {
        temp.push(' ')
      } else {
        temp.push(`${j}`)
      }
    }
    board.push(temp)
  }
  for (let i = 0; i < data.length - 1; i++) {
    let currData = data[i]
    let nextData = data[i+1]
    let x = currData.day
    let y = maxValueOfY - currData.stock
    let xStop = nextData.day
    let yStop = maxValueOfY - nextData.stock
    board[y][x] = '#'
    while(x !== xStop || y !== yStop) {
      if (y > yStop) {
        y--
        board[y][x] = 'U'
      } else if (y < yStop) {
        y++
        board[y][x] = 'D'
      } else {
        x++
        board[y][x] = 'R'
      }
    }
    board[y][x] = '#'
  }
  console.log(board)
}

const data = [{
  stock: 4,
  day: 2
}, {
  stock: 2,
  day: 4
}, {
  stock: 7,
  day: 5
}, {
  stock: 7,
  day: 7
}, {
  stock: 4,
  day: 8
}]

generateChart(data)
/*
[ 
  [ '9', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '7', ' ', ' ', ' ', 'U', '#', 'R', '#', ' ', ' ', ' ' ],
  [ '6', ' ', ' ', ' ', 'U', ' ', ' ', 'D', ' ', ' ', ' ' ],
  [ '5', ' ', ' ', ' ', 'U', ' ', ' ', 'D', ' ', ' ', ' ' ],
  [ '4', ' ', '#', ' ', 'U', ' ', ' ', 'D', '#', ' ', ' ' ],
  [ '3', ' ', 'D', ' ', 'U', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '2', ' ', 'D', 'R', '#', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ '1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
  [ 'x', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ] 
]

*/

const data2 = [{
  stock: 2,
  day: 1
}, {
  stock: 3,
  day: 3
}, {
  stock: 1,
  day: 5
}]
generateChart(data2)

/*
  [ 
    [ '5', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ '4', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
    [ '3', 'U', 'R', '#', ' ', ' ', ' ', ' ' ],
    [ '2', '#', ' ', 'D', ' ', ' ', ' ', ' ' ],
    [ '1', ' ', ' ', 'D', 'R', '#', ' ', ' ' ],
    [ 'x', '1', '2', '3', '4', '5', '6', '7' ] 
  ]
*/