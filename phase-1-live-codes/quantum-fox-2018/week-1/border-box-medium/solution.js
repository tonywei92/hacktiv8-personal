function generateBorderBox(width) {
  for(let i = 0; i < width; i++) {
    let rows = '';
    for(let j = 0; j < width; j++) {
      if((i === 1 && j === 2) || (i === 2 && j === 1) || (i === 1 && j === width - 3) || (i === 2 && j === width - 2) || (i === width - 2 && j === 2) || (i === width - 3 && j === 1) || (i === width - 3 && j === width - 2) || (i === width - 2 && j === width - 3)) {
        rows += ' ';
      } else if(j === 0 || (true && j === 2) || j === width - 3 || j === width - 1) {
        rows += 'I';
      } else if(i === Math.floor(width / 2) && j === Math.floor(width / 2)) {
        rows += '*';
      } else if(i === 0 || i === 2 || i === width - 3 || i === width - 1) {
        rows += 'I';
      } else {
        rows += ' ';
      }
    }
    console.log(rows);
  }
}


generateBorderBox(9);
/*
IIIIIIIII
I       I
I IIIII I
I I   I I
I I * I I
I I   I I
I IIIII I
I       I
IIIIIIIII
*/

generateBorderBox(13);
/*
IIIIIIIIIIIII
I           I
I IIIIIIIII I
I I       I I
I I       I I
I I       I I
I I   *   I I
I I       I I
I I       I I
I I       I I
I IIIIIIIII I
I           I
IIIIIIIIIIIII
*/

generateBorderBox(23);
/*
IIIIIIIIIIIIIIIIIIIIIII
I                     I
I IIIIIIIIIIIIIIIIIII I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I        *        I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I IIIIIIIIIIIIIIIIIII I
I                     I
IIIIIIIIIIIIIIIIIIIIIII
*/