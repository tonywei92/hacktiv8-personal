function transpose(array) {
  let transposedArray = []
  for (let i = 0; i < array[0].length; ++i) {
    transposedArray[i] = []
    for (let j = 0; j < array.length; ++j) {
      transposedArray[i][j] = array[j][i];
    }
  }
  return transposedArray
}


function generateArrow(size, direction) {
  if (size < 3) {
    return 'minimum size adalah 3'
  }

  let upArrow = []

  for (let i = 0; i < size; i++) {
    let row = Array(size * 2 - 1).fill(' ')
    row[size - 1 - i] = '*'
    row[size - 1 + i] = '*'
    if (i === size - 1) {
      row.forEach((val, idx) => {
        if (
          idx <= size - 1 - Math.floor((size - 1) / 2)
          || idx >= size - 1 + Math.floor((size - 1) / 2)
        ) {
          row[idx] = '*'
        }
      })
    }
    upArrow.push(row)
  }

  for (let i = 0; i < size; i++) {
    let row = Array(size * 2 - 1).fill(' ')
    row[size - 1 - Math.floor((size - 1) / 2)] = '*'
    row[size - 1 + Math.floor((size - 1) / 2)] = '*'
    if (i === size - 1) {
      row.forEach((val, idx) => {
        if (idx > size - 1 - (size - 1) / 2 && idx < size - 1 + (size - 1) / 2) {
          row[idx] = '*'
        }
      })
    }
    upArrow.push(row)
  }

  
  let output
  if (direction === 'up') {
    output = upArrow
  } else if (direction === 'right') {
    output = transpose(upArrow).map(a => a.reverse())
  } else if (direction === 'down') {
    output = upArrow.reverse()
  } else {
    output = transpose(upArrow)
  }

  return output.map(row => row.join(' ')).join('\n')
}

console.log(generateArrow(2))
// minimum size adalah 3

console.log(generateArrow(3))
/* 

    *
  * * * * *
*         *
  * * * * *
    *

*/

console.log(generateArrow(4))
/* 

      *
    * *
  *   * * * * *
*             *
  *   * * * * *
    * *
      *

*/

console.log(generateArrow(5))
/* 

        *
      * *
    *   * * * * * *
  *               *
*                 *
  *               *
    *   * * * * * *
      * *
        *

*/

console.log(generateArrow(6))
/* 

          *
        * *
      *   *
    *     * * * * * * *
  *                   *
*                     *
  *                   *
    *     * * * * * * *
      *   *
        * *
          *

*/

console.log(generateArrow(7))

/*

            *
          * *
        *   *
      *     * * * * * * * *
    *                     *
  *                       *
*                         *
  *                       *
    *                     *
      *     * * * * * * * *
        *   *
          * *
            *

*/

console.log(generateArrow(5, 'up'))

/* 

        *
      *   *
    *       *
  *           *
* * *       * * *
    *       *
    *       *
    *       *
    *       *
    * * * * *
    
*/

console.log(generateArrow(5, 'right'))

/* 

          *
          * *
* * * * * *   *
*               *
*                 *
*               *
* * * * * *   *
          * *
          *

*/

console.log(generateArrow(5, 'left'))

/* 

        *
      * *
    *   * * * * * *
  *               *
*                 *
  *               *
    *   * * * * * *
      * *
        *

*/

console.log(generateArrow(5, 'down'))

/* 

    * * * * *
    *       *
    *       *
    *       *
    *       *
* * *       * * *
  *           *
    *       *
      *   *
        *

*/
