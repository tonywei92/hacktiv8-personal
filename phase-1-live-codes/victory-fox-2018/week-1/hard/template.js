function queensMove(board) {
  // your code here
  //silakan menambahkan function yang kamu perlukan
}

//DRIVER CODE

console.log(queensMove([])); // Invalid board

let board1 = [
  [' ', ' ', ' ', 'E', 'E', ' ', ' ', 'E'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'E', ' ', ' ', 'E', ' ', ' '],
  [' ', ' ', ' ', 'Q', ' ', ' ', 'E', 'E'],
  [' ', ' ', 'E', ' ', 'E', ' ', ' ', ' '],
  [' ', 'E', 'E', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'E', ' ']
]

console.log(queensMove(board1)); // There are 9 enemies on Queen's way


let board2 = [
  ['E', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'Q'],
  [' ', ' ', ' ', ' '],
  [' ', 'E', 'E', ' '],
]

console.log(queensMove(board2)); // There are 1 enemy on Queen's way

let board3 = [
  ['E', ' ', 'E', 'E'],
  [' ', ' ', ' ', ' '],
  ['E', ' ', 'E', ' '],
  [' ', ' ', ' ', ' '],
  [' ', 'Q', ' ', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', 'E', ' '],
]

console.log(queensMove(board3)); // There are no enemy on Queen's way
