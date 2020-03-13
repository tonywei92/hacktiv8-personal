// let ukuran = 10
// let board = []
// for(let i=0; i<ukuran; i++){
//   board.push([])
//   for (let j = 0; j < ukuran; j++) {
//     board[i].push('-')
//   }
// }

// for (let i = 0; i < ukuran / 2; i++) {
//   board[randPos()][randPos()] = 'B'
// }

// board[randPos()][randPos()] = 'X'


// console.log(board.join(''));

// function randPos(){
//   return Math.floor(Math.random() * ukuran)
// }

// createBoard('--------------------------XB---------------------B---------------------------BB--------------B------', 10);
// createBoard('------------------------BBXBB-----------------------------------------------------------------------', 10);
// createBoard('-------------------------------------------B-------BX-----------BB-------------------------B--------', 10);
// createBoard('----B-----------------B------B----------------B-------------------B-X-------------------------------', 10);

function createBoard(string, size){
  let board = []
  let currIndex = 0;
  let x = [];
  let b = [];
  for (let i = 0; i < size; i++) {
    board.push([])
    for (let j = 0; j < size; j++) {
      board[i][j] = string[currIndex]
      if(string[currIndex] === 'B'){
        b.push([i, j])
      }
      else if(string[currIndex] === 'X'){
        x = [i, j]
      }
      currIndex++;
    }
  }

  let d = {jarak: (Math.abs(x[0]-b[0][0]))+(Math.abs(x[1]-b[0][1])), y: b[0][0], x: b[0][1]}
  let j = {jarak: (Math.abs(x[0]-b[0][0]))+(Math.abs(x[1]-b[0][1])), y: b[0][0], x: b[0][1]}
  for (let i = 1; i < b.length; i++) {
    let jarak = (Math.abs(x[0]-b[i][0]))+(Math.abs(x[1]-b[i][1]))
    if(jarak < d.jarak){
      d = {jarak: jarak, y:b[i][0], x:b[i][1]}     
    }
    else if(jarak >= d.jarak){
      j = {jarak: jarak, y:b[i][0], x:b[i][1]}     
    }
  }

  board[j.y][j.x] = 'J'
  board[d.y][d.x] = 'D'

  console.log(board);
  
}

/**
 * gw ngerjain 18~20mnt
 */