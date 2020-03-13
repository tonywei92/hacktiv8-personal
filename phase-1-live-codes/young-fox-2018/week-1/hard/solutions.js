const argv = process.argv.slice(2)[1]
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}
function reset_board() {
  process.stdout.write('\033c\033[3J');
}
const getNewCoor = (direction, pos) => {
  switch (direction) {
    case 'right':
      return [ pos[0], pos[1] + 1 ]
    case 'left':
      return [ pos[0], pos[1] - 1 ]
    case 'up':
      return [ pos[0] - 1, pos[1] ]
    case 'down':
      return [ pos[0] + 1, pos[1] ]
  }
}
const catFindMouse = (cat, mouse) => {
  const solveBoard = Array(5).fill('').map((_, i) => Array(5).fill('').map((_, j) => i === cat.pos[0] && j === cat.pos[1] ? cat.icon : i === mouse.pos[0] && j === mouse.pos[1] ? mouse.icon : "🌿"))
  for ( let i = 0; i < cat.moves.length; i++ ) {
    console.log(solveBoard)
    sleep(1000)
    reset_board()
    solveBoard[cat.pos[0]][cat.pos[1]] = "🐾"
    solveBoard[mouse.pos[0]][mouse.pos[1]] = "🐾"
    cat.pos = getNewCoor(cat.moves[i], cat.pos)
    mouse.pos = getNewCoor(mouse.moves[i], mouse.pos)
    solveBoard[mouse.pos[0]][mouse.pos[1]] = mouse.icon
    solveBoard[cat.pos[0]][cat.pos[1]] = cat.icon
    if ( cat.pos[0] === mouse.pos[0] && cat.pos[1] === mouse.pos[1] ) {
      console.log(solveBoard)
      return "Kucing berhasil memakan tikus"
    }
  }
  console.log(solveBoard)
  return "Kucing gagal memakan tikus"
}

if ( argv === "one" ) {
  let cat1 = {
    icon: '🐈',
    moves: ['left', 'down', 'left'],
    pos: [1, 3],
    coordinates: []
   }
  let mouse1 = {
    icon: '🐁',
    moves: ['left', 'up', 'up'],
    pos: [4, 2],
    coordinates: []
   }
  reset_board()
  console.log(catFindMouse(cat1, mouse1))
  console.log('===============================')
  sleep(2000)
} else if ( argv === "two" ) {
  let cat2 = {
    icon: '🐈',
    moves: ['down', 'right', 'right', 'down', 'left'],
    pos: [2, 2],
    coordinates: []
   }
  let mouse2 = {
    icon: '🐁',
    moves: ['left', 'up', 'up', 'left', 'up'],
    pos: [4, 4],
    coordinates: []
   }
  reset_board()
  console.log(catFindMouse(cat2, mouse2))
  console.log('===============================')
  sleep(2000)
} else if ( argv === "three" ) {
  let cat3 = {
    icon: "🐈",
    moves: ['down', 'right', 'right', 'down', 'down'],
    pos: [0, 1],
    coordinates: []
   }
  let mouse3 = {
    icon: "🐁",
    moves: ['left', 'left', 'left', 'up', 'left'],
    pos: [4, 4],
    coordinates: []
   }
  reset_board()
  console.log(catFindMouse(cat3, mouse3))
  sleep(2000)
}






