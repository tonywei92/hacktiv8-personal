function generateBoard(rows, cols) {
  
}


function whoMeetWhom(board, maxSteps) {
  
}


let board1 = generateBoard(5, 4)
console.log(board1)
// output
/*

[ [ '←', '↑', '↑', '→' ],
  [ '↓', '←', '↓', '←' ],
  [ '←', '↑', '←', '←' ],
  [ '←', '←', '←', '←' ],
  [ '→', '↓', '↑', '↓' ] ]

*/


whoMeetWhom(board1, 6)
// output
// No one meets each other



// testing with dummy board

let board2 = [
  [ '↓', '←', '→', '↑' ],
  [ '→', '↓', '←', '→' ],
  [ '↓', '↓', '↑', '↓' ],
  [ '←', '↑', '→', '↑' ],
  [ '←', '↑', '←', '←' ]
]

whoMeetWhom(board2, 6)
// output
// A meets D after 4 steps
