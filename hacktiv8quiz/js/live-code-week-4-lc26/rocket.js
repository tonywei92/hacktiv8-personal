/*
===========
MineSweeper
===========

[INSTRUCTIONS]
Seorang tentara sedang berada di ladang ranjau kita harus membantu tentara untuk menemukan jumlah ranjau yang ada disekeliling dekat tentara.
terdapat posisi tentara didalam map adalah huruf O dan posisi bom adalah X
tugas kita harus mencari tahu bom yang ada di delapan penjuru mata angin dari posisi tentara. ingat yang dihitung hanya bom yang ada di delapan penjuru mata angin dekat tentara


[EXAMPLE]
INPUT: [
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', 'O', 'X', ' ', ' '],
  [' ', 'X', ' ', 'X', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
OUTPUT: 4
INPUT: [
  [' ', ' ', ' ', ' ', ' ', 'O'],
  [' ', ' ', ' ', ' ', 'X', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
OUTPUT: 2
*/

function MineSweeper(array) {
  var idxI = 0;
  var idxJ = 0;
  var bombCount = 0;

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      if (array[i][j] === 'O') {
        idxI = i;
        idxJ = j;
      }
    }
  }
  
  try {
    if (array[idxI - 1][idxJ - 1] === "X") {
      bombCount++;
    }
  } catch (e) { }

  try {
    if (array[idxI - 1][idxJ] === "X") {
      bombCount++;
    }
  } catch (e) { }

  try {
    if (array[idxI - 1][idxJ + 1] === "X") {
      bombCount++;
    }
  } catch (e) { }

  try {
    if (array[idxI][idxJ - 1] === "X") {
      bombCount++;
    }
  } catch (e) { }

  try {
    if (array[idxI][idxJ + 1] === "X") {
      bombCount++;
    }
  } catch (e) { }

  try {
    if (array[idxI + 1][idxJ - 1] === "X") {
      bombCount++;
    }
  } catch (e) { }

  try {
    if (array[idxI + 1][idxJ] === "X") {
      bombCount++;
    }
  } catch (e) { }

  try {
    if (array[idxI + 1][idxJ + 1] === "X") {
      bombCount++;
    }
  } catch (e) { };

  return bombCount;
}
var board = [
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', 'O', 'X', ' ', ' '],
  [' ', 'X', ' ', 'X', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
console.log(MineSweeper(board)) // 4
var board2 = [
  [' ', ' ', ' ', ' ', ' ', 'O'],
  [' ', ' ', ' ', ' ', 'X', 'X'],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ']
]
console.log(MineSweeper(board2)) // 2
var board3 = [
  ['X', ' ', 'X', ' ', ' ', ' '],
  [' ', ' ', ' ', 'X', 'X', ' '],
  [' ', ' ', 'X', 'O', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' '],
  [' ', 'X', ' ', ' ', 'X', ' ']
]
console.log(MineSweeper(board3)) // 3
