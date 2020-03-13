function lightning (size) {
  // Code here

  if (size === 1) {
    return '\n*';
  }

  let output = [];

  const middleIndex = size - 1;
  const lastIndex = (size * 2) - 2;

  for (let i = 0; i < (size * 2) - 1; i++) {

    const row = [];

    for (let j = 0; j < (size * 2) - 1; j++) {

      let char = ' ';

      if (
        // First row
        (i === 0 && j === middleIndex) ||
        // Top diagonal
        ((i < middleIndex && i > 0) && j === middleIndex + i) ||
        // Middle row
        (i === middleIndex && j % 2 === 0) ||
        // Bottom diagonal
        ((i > middleIndex && i < lastIndex) && (j === (i - middleIndex))) ||
        // Last row
        (i === lastIndex && j === middleIndex )
      ) {
        char = '*';
      }

      row.push(char);

    }


    output.push(row.join(''));

  }

  return '\n' + output.join('\n');
}

console.log(lightning(1));
/*

*

*/

console.log(lightning(2));

/*

 *
* *
 *

*/

console.log(lightning(3));
/*

  *
   *
* * *
 *
  *

*/

console.log(lightning(4));

/*

   *
    *
     *
* * * *
 *
  *
   *

*/

console.log(lightning(5));

/*

    *
     *
      *
       *
* * * * *
 *
  *
   *
    *

*/
