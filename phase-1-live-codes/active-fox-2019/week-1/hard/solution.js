function clearScreen () {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

function sleep (milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function crossingRiver(wide, length, riverPos1, riverPos2) {
  let randomKid = getRandomInt(0, wide)
  let randomBridge1 = getRandomInt(0, wide)
  let randomBridge2 = riverPos2 === riverPos1 + 1 ? randomBridge1 : getRandomInt(0, wide)
  //RELEASE 0
  const board = Array(wide).fill("").map((_, idx) => {
    return Array(length).fill("").map((_, idy) => {
      if (idy === riverPos1 - 1 || idy === riverPos2 - 1) {
        return "🌊"
      }
      return  "⬜️"
    })
  })

  // RELEASE 1
  board[randomKid][0] = "🐈"
  board[randomBridge1][riverPos1 - 1] = "➡️"
  board[randomBridge2][riverPos2 - 1] = "➡️"
  let kidPos = [randomKid, 0]
  let bridgePos = [[
    randomBridge1, riverPos1 - 1
  ], [
    randomBridge2, riverPos2 - 1
  ]]
  // while(true) {
  //   randomBridge2 = getRandomInt(0, wide)
  //   let currentBridgeBool = board[randomBridge2][riverPos2 - 1] === "| |"
  //   if (randomBridge2 - 1 >= 0 && randomBridge2 + 1 < wide) {
  //     if ( currentBridgeBool && board[randomBridge2 - 1][riverPos2 - 1] === "| |" && board[randomBridge2 + 1][riverPos2 - 1] === "| |") {
  //       break
  //     }
  //   } else if (randomBridge2 - 1 >= 0 && randomBridge2 + 1 >= wide) {
  //     if ( currentBridgeBool && board[randomBridge2 - 1][riverPos2 - 1] === "| |") {
  //       break
  //     }
  //   } else if (randomBridge2 - 1 < 0 && randomBridge2 + 1 < wide) {
  //     if ( currentBridgeBool && board[randomBridge2 + 1][riverPos2 - 1] === "| |") {
  //       break
  //     }
  //   }
  // }
  // board[randomBridge2][riverPos2 - 1] = "➡️"
  // let bridgeRiverPos1 = bridgePos[0][1]
  // if (Math.abs(bridgeRiverPos1 - bridgePos[1][0]) > Math.abs(bridgeRiverPos1 - randomBridge2)) {
  //   bridgePos.splice(1, 1, [randomBridge2, riverPos2 - 1])
  // }

  let coorRiver = []
  // RELEASE2
  while(bridgePos.length > 0) {
    if (kidPos[0] < bridgePos[0][0]) {
      board[kidPos[0]][kidPos[1]] = "⬜️"
      board[kidPos[0] + 1][kidPos[1]] = "🐈"
      kidPos[0] += 1
    } else if (kidPos[0] > bridgePos[0][0]) {
      board[kidPos[0]][kidPos[1]] = "⬜️"
      board[kidPos[0] - 1][kidPos[1]] = "🐈"
      kidPos[0] -= 1
    } else {
      board[kidPos[0]][kidPos[1]] = "⬜️"
      board[kidPos[0]][kidPos[1] + 1] = "🐈"
      kidPos[1] += 1
    }
    
    while (kidPos[0] === bridgePos[0][0] && kidPos[1] === bridgePos[0][1]) {
      coorRiver = [...kidPos]
      bridgePos.splice(0, 1)
      board[kidPos[0]][kidPos[1]] = "➡️"
      board[kidPos[0]][kidPos[1] + 1] = "🐈"
      kidPos[1] += 1
      if (bridgePos.length === 0) {
        break
      }
    }

    console.log(board)
    sleep(500)
    clearScreen()
  }
  while(kidPos[1] !== length -1) {
    board[kidPos[0]][kidPos[1]] = "⬜️"
    board[kidPos[0]][kidPos[1] + 1] = "🐈"
    kidPos[1] += 1
    console.log(board)
    sleep(500)
    clearScreen()
  }
  console.log("Cat successfully crossed the river!")
}


crossingRiver(5, 6, 2, 5)
