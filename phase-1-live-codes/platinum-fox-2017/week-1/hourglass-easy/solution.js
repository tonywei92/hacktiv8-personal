function jamPasirAtas(num) {
  let totalRow = num;
  let totalCol = (num * 2) - 1;
  let board = [];

  for(let row=0; row<totalRow; row++) {
    let line = [];
    for(let col=0; col<totalCol; col++) {
      if(col < row || col > totalCol - 1 - row) {
        line.push(' ');
      } else {
        line.push('x');
      }
    }
    board.push(line.join(''));
  }
  return board;
}

function generateHourglass(num) {
  var board = jamPasirAtas(num);

  for(let i=board.length-2; i>=0; i--) {
    board.push(board[i]);
  }

  return board;
}

function printHourglass(data) {
  return data.join('\n');
}

let hrglass1 = generateHourglass(1);
console.log(hrglass1);
/*
[ 'x' ]
*/
console.log(typeof hrglass1); // object
console.log(printHourglass(hrglass1));
/*
#
*/

console.log('===============================');
let hrglass2 = generateHourglass(2);
console.log(hrglass2);
/*
[ 'xxx', ' x ', 'xxx' ]
*/
console.log(typeof hrglass2);  // object
console.log(printHourglass(hrglass2));
/*
###
 #
###
*/

console.log('===============================');
let hrglass3 = generateHourglass(3);
console.log(hrglass3);
/*
[ 'xxxxx', ' xxx ', '  x  ', ' xxx ', 'xxxxx' ]
*/
console.log(typeof hrglass3); // object
console.log(printHourglass(hrglass3));
/*
#####
 ###
  #
 ###
#####
*/

console.log('===============================');
let hrglass4 = generateHourglass(4);
console.log(hrglass4);
/*
[ 'xxxxxxx',
  ' xxxxx ',
  '  xxx  ',
  '   x   ',
  '  xxx  ',
  ' xxxxx ',
  'xxxxxxx' ]
*/
console.log(typeof hrglass4); // object
console.log(printHourglass(hrglass4));
/*
#######
 #####
  ###
   #
  ###
 #####
#######
*/

console.log('===============================');
let hrglass5 = generateHourglass(5);
console.log(hrglass5);
/*
[ 'xxxxxxxxx',
  ' xxxxxxx ',
  '  xxxxx  ',
  '   xxx   ',
  '    x    ',
  '   xxx   ',
  '  xxxxx  ',
  ' xxxxxxx ',
  'xxxxxxxxx' ]
*/
console.log(typeof hrglass5);  // object
console.log(printHourglass(hrglass5));
/*
#########
 #######
  #####
   ###
    #
   ###
  #####
 #######
#########
*/