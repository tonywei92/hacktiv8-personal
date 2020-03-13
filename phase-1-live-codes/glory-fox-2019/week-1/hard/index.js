function generateBoard(num) {

}

function generateCoordinate(pairsNumber, maxIndex = 4) {

}

function tebakHuruf(board, position) {

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

const dummyBoard = [
  { chara: 'A', pos: [0, 0] },
  { chara: 'A', pos: [3, 2] },
  { chara: 'B', pos: [0, 1] },
  { chara: 'B', pos: [0, 3] },
  { chara: 'C', pos: [2, 2] },
  { chara: 'C', pos: [0, 2] },
  { chara: 'D', pos: [2, 3] },
  { chara: 'D', pos: [3, 0] }
] //dummyBoard is just for testing purpose only

tebakHuruf(dummyBoard, ['3,0', '2,3', '3,3', '2,1', '2,0', '1,1'])


