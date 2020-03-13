function createStage(level) {
  let board = []
  let blocks = []
  let cols = level+1


  for (let i = 0; i < ((level+1)*2)+2; i++) {
    let row = []
    for (let j = 0; j <= cols; j++) {
      row.push(' ')
    }


    if (i % 2 !== 0 && blocks.length <= level) {
      let block = {
        i: i,
        j: 0,
        direction: '>'
      }
      if(blocks.length % 2 !== 0){
        block.j=cols
        block.direction='<'
      }
      blocks[blocks.length] = block
      row[block.j] = block.direction
    }

    board.push(row)
  }
  return { board, blocks}
}

// /* animasi */
function startGame(stage){
  console.log(stage.board)
  setInterval(()=>{
    console.clear()
    stage = animateBlocker(stage)
  },1000)
}

function animateBlocker(stage){
  for (let i = 0; i < stage.blocks.length; i++) {
    stage.board[stage.blocks[i].i][stage.blocks[i].j] = ' '
    if(stage.blocks[i].direction === '>'){
      if(stage.blocks[i].j+1 > stage.board[0].length-1){
        stage.blocks[i].j--
        stage.blocks[i].direction = '<'
      }
      else{
        stage.blocks[i].j++
      }
    }
    else{
      if(stage.blocks[i].j-1 < 0){
        stage.blocks[i].j++
        stage.blocks[i].direction = '>'
      }
      else{
        stage.blocks[i].j--
      }
    }
    stage.board[stage.blocks[i].i][stage.blocks[i].j] = stage.blocks[i].direction
  }
  console.log(stage.board)
  return stage
}

let stage = createStage(1)
//console.log(stage)
/**
[
  [' ', ' ', ' '],
  ['X', ' ', ' ']
  [' ', ' ', ' ']
  [' ', ' ', 'X']
  [' ', ' ', ' ']
  [' ', ' ', ' ']
]
*/

console.log(`\n start game`)
console.log(startGame(stage)) // animasi penghalang(X)