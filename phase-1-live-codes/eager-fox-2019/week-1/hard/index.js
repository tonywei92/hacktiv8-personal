function generateObstacle(num) {

}

function initGame(firstPosition, obstacles, userInput) {

}

const soal = [
  [' ', 'I', ' ', ' ', ' ', 'I', ' ', 'I'],
  [' ', 'I', ' ', 'I', ' ', 'I', ' ', ' '],
  [' ', 'I', ' ', 'I', ' ', 'I', ' ', 'I'],
  [' ', 'I', ' ', 'I', ' ', 'I', ' ', 'I'],
  [' ', ' ', ' ', 'I', ' ', 'I', ' ', 'I'],
  [' ', 'I', ' ', 'I', ' ', 'I', ' ', 'I'],
  [' ', 'I', ' ', 'I', ' ', 'I', ' ', 'I'],
  [' ', 'I', ' ', 'I', ' ', ' ', ' ', 'I']
]

const soal2 = generateObstacle(4)
initGame(2, soal, 'up2,-,up4,-,down7,-,up6,-')

function reset_board() {
  console.clear("\x1B[2J")
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function animate() {
  sleep(500)
  reset_board()
}
