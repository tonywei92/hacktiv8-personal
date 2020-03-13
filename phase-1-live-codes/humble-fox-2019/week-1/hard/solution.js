/*
  di ini solution nya temanya kucing
  gw ubah jadi bajak laut ya guys
*/
clearScreen()
function catFindFoods (str) {
  const board = generateBoard(str)
  let homePos = ''
  let kucingPos = ''
  const foodPos = []
  let totalDistance = 0
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if(board[i][j] === 'P') {
        kucingPos = [i, j]
      } else if(board[i][j] === 'H') {
        homePos = [i, j]
      } else if (board[i][j] === 'T') {
        foodPos.push([i,j])
      }
    }
  }
  console.log(board);
  sleep(2200)
  clearScreen()
  while(foodPos.length > 0) {
    board[kucingPos[0]][kucingPos[1]] = 'O'
    let nearestPos = getNearestFood(foodPos, kucingPos)
    totalDistance += nearestPos.distance
    foodPos.splice(nearestPos.index, 1)
    kucingPos = nearestPos.nearestPos
    board[kucingPos[0]][kucingPos[1]] = 'P'
    console.log(board)
    sleep(2200)
    clearScreen()
  }
  if(foodPos.length === 0) {
    board[kucingPos[0]][kucingPos[1]] = 'O'
    let home = getNearestFood([homePos], kucingPos)
    board[home.nearestPos[0]][home.nearestPos[1]] = 'P'
    totalDistance += home.distance
    console.log(board)
    sleep(2200)
    clearScreen()
  }
  return `Langkah yang ditempuh untuk mengambil semua harta karun dan kembali kerumah adalah ${totalDistance} langkah`
}

function getNearestFood(array, myPos) {
  let nearestPos
  let distance = Infinity
  let index
  for(let i = 0; i < array.length; i++) {
    let currentDistance = Math.abs(array[i][0] - myPos[0]) + Math.abs(array[i][1] - myPos[1])
    if(currentDistance < distance) {
      distance = currentDistance
      nearestPos = array[i]
      index = i
    }
  }
  return {
    nearestPos,
    distance,
    index
  }
}

function generateBoard (str) {
  const output = []
  let number = 0
  for(let i = 0; i < 4; i++) {
    const insideRow = []
    for(let j = 0; j < 4; j++) {
      insideRow.push(str[number])
      number++
    }
    output.push(insideRow)
  }
  return output
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

//console.log(catFindFoods("OOOOOOTTOPHOOTOO"))
console.log(catFindFoods("TOOOOPOHOTOTOTOO"))

/*
  >**“OOOOOOTTOPHOOTOO”** // 7 kotak
  >**“TOOOOPOHOTOTOTOO”** //14 kotak
*/