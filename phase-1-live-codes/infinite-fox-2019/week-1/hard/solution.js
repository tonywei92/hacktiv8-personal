// STATIC Stage Information
const stage1 = 'oooooooooooooooo';
const lengthStage1 = 4;
const stage2 = 'oooooooooooooooooxoo';
const lengthStage2 = 5;
const stage3 = 'oxooxooxooxo';
const lengthStage3 = 3;
const stage4 = 'ooooooooooxooooooxxooooxxxooooxxxoooxxxxxo';
const lengthStage4 = 7;
const jumpPowerStage1 = 0;
const jumpPowerStage2 = 3;
const jumpPowerStage3 = 6;
const jumpPowerStage4 = 2;
// STATIC Stage End

function printBoard(strTrack, lengthTrack) {
  // code here
  const result = [];
  let printLine = [];
  for(let i = 0; i < strTrack.length; i++) {
    if (strTrack[i] === 'o') {
      printLine.push(' ');
    } else {
      printLine.push('🔲');
    }
    if(printLine.length === lengthTrack) {
      result.push(printLine)
      printLine = [];
    }
  }
  return result;
}

const boards1 = printBoard(stage1, lengthStage1);
const boards2 = printBoard(stage2, lengthStage2);
const boards3 = printBoard(stage3, lengthStage3);
const boards4 = printBoard(stage4, lengthStage4);

// RELEASE 0
// console.log(boards1);
// console.log(boards2);
// console.log(boards3);
// console.log(boards4);

function marioLastPosition(boards, jumpPower) {
  // code here
  if(jumpPower > boards.length) {
    jumpPower = 0;
  }
  let isWin = true;
  checkWin:
  for (let i = 0; i < boards[0].length; i++) {
    if (boards[boards.length - jumpPower - 1][i] === '🔲') {
      let lastHeight = 0
      for (let j = boards.length - jumpPower - 1; j < boards.length; j++) {
        if (boards[j][i - 1] === '🔲') {
          lastHeight = j - 1;
          break;
        }
      }
      if (boards[lastHeight - jumpPower][i] === '🔲') {
        console.log(`Oops! You stuck at the step ${i - 1}`);
        isWin = false;
        break checkWin;
      }
    }
  }
  if(isWin) console.log(`Congratulations you win the game`);
}

// RELEASE 1
// const marioLastPos1 = marioLastPosition(boards1, jumpPowerStage1);
// const marioLastPos2 = marioLastPosition(boards2, jumpPowerStage2);
// const marioLastPos3 = marioLastPosition(boards3, jumpPowerStage3);
// const marioLastPos4 = marioLastPosition(boards4, jumpPowerStage4);

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

function sdDefinition (boards) {
  let draw = '';
  boards.forEach((board, i) => {
    if (i === 0) draw += '🔲 '.repeat(board.length + 2) + '\n';
    board.forEach((line, j) => {
      if(j === 0) draw += '🔲 ';
      draw += line + ' '
    })
    draw += '🔲 \n';
  });
  draw += '🔲 '.repeat(boards[0].length + 2);
  console.log(draw);
}

function renderMario(boards, marioPosition, maxHeight) {
  clearScreen();
  boards[maxHeight - marioPosition.height][marioPosition.position] = '🤴';
  // sd definition
  sdDefinition(boards);
  // array definition
  // console.log(boards);
  sleep(1000);
  boards[maxHeight - marioPosition.height][marioPosition.position] = ' ';
}

function jump(boards, marioPosition, maxHeight, jumpPower) {
  for (let i = 0; i < jumpPower; i++) {
    marioPosition.height++;
    if(marioPosition.height === maxHeight || i === jumpPower - 1) {
      renderMario(boards, marioPosition, maxHeight);   
      if(boards[maxHeight - marioPosition.height][marioPosition.position + 1] === '🔲') {
        return false;
      } else {
        marioPosition.position++;
        renderMario(boards, marioPosition, maxHeight);
        return true;
      }
    } else {
      renderMario(boards, marioPosition, maxHeight);
    }
  }
}

function checkFall(boards, marioPosition, maxHeight) {
  if (boards[maxHeight - marioPosition.height + 1] && boards[maxHeight - marioPosition.height + 1][marioPosition.position] === ' ') {
    for (let i = marioPosition.height - 1; i >= 0; i--) {
      if (boards[maxHeight - i][marioPosition.position] === '🔲') {
        break;
      } else {
        marioPosition.height = i;
        renderMario(boards, marioPosition, maxHeight);
      }
    }
  }
}

function animate(boards, jumpPower) {
  // code here
  const maxHeight = boards.length - 1;
  const marioPosition = {
    position: 0,
    height: 0
  }
  renderMario(boards, marioPosition, maxHeight);
  let canMove = true;
  while(canMove && marioPosition.position !== boards[0].length - 1) {
    checkFall(boards, marioPosition, maxHeight);    
    if(boards[maxHeight - marioPosition.height][marioPosition.position + 1] === '🔲') {
      canMove = jump(boards, marioPosition, maxHeight, jumpPower);
    } else {
      marioPosition.position++;
      renderMario(boards, marioPosition, maxHeight);
    }
  }
  checkFall(boards, marioPosition, maxHeight);

  // to solve stage 1 - 4
  // marioLastPosition(boards, jumpPower)

  // to solve including bonus stage
  if(marioPosition.position === boards[0].length - 1) {
    console.log('Congratulations you win the game');
  } else {
    console.log(`Oops! You stuck at the step ${marioPosition.position}`);
  }
}


// RELEASE 2
// animate(boards1, jumpPowerStage1);
// RELEASE 3
// animate(boards2, jumpPowerStage2);
// animate(boards3, jumpPowerStage3);
// RELEASE 4
animate(boards4, jumpPowerStage4);



// secret stage
const jumpPowerStage5 = 1;
const boards5 = [
  [" ", " ", " ", " ", " ",  " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ",  " ", "🔲", "🔲", " ", " "],
  [" ", " ", " ", " ", "🔲",  "🔲", " ", " ", " ", " "],
  [" ", " ", " ", " ", "🔲",  "🔲", " ", "🔲", " ", " "],
  [" ", " ", "🔲", " ", " ",  " ", " ", " ", "🔲", " "],
  [" ", "🔲", "🔲", " ", " ",  "🔲", "🔲", " ", "🔲", " "],
]
// animate(boards5, jumpPowerStage5);
const jumpPowerStage6 = 1;
const boards6 = [
  [" ", " ", " ", " ", " ",  " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ",  " ", "🔲", "🔲", " ", " "],
  [" ", " ", " ", " ", "🔲",  "🔲", " ", " ", " ", " "],
  [" ", " ", " ", " ", "🔲",  "🔲", " ", "🔲", " ", " "],
  [" ", " ", "🔲", " ", " ",  " ", " ", " ", "🔲", " "],
  [" ", "🔲", "🔲", " ", " ",  "🔲", "🔲", " ", " ", " "],
]
// animate(boards6, jumpPowerStage6);