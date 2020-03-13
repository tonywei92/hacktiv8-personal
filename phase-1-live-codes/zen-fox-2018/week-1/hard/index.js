function generateHouse (size, heightDoor, widthDoor) {
  console.log('* * * * * * * * *'.length)
  // segitiga
  for (let i = 0; i < size; i++) {
    let temp = ''
    for (let j = 0; j < size * 2 -1; j++) {
      if (i === size - 1 || i === 0 && j === size - 1) {
        temp += '* '
      } else if (i > 0 && i < size - 1 && (j === size - 1 - i || j === size - 1 + i)) {
        temp += '* '
      } else {
        temp += '  '
      }
    }
    console.log(temp)
  }

  for (let i = 0; i < size; i++) {
    let temp = ''
    for (let j = 0; j < size * 2 - 1; j++) {
      let left = 1
      let right = size * 2 - 3
      if ( i >= heightDoor - 1 && (j >= widthDoor && j < (size * 2) - 1 - widthDoor)) {
        temp += '# '
      } else {
        if ( j == left || j == right || (i === size - 1 && (j >=left && j <= right))) {
          temp += '* '
        } else {
          temp += '  '
        }
      }
      
    }
    console.log(temp)
  }
}

generateHouse(5, 3, 3)
/* OUTPUT
        *
      *   *
    *       *
  *           *
* * * * * * * * *
  *           *
  *   # # #   *
  *   #   #   *
  * * # # # * *  
*/
// generateHouse(6, 4, 3)
/* OUTPUT
          *
        *   *
      *       *
    *           *
  *               *
* * * * * * * * * * *
  *               *
  *     # # #     *
  *     #   #     *
  *     #   #     *
  * * * # # # * * *

*/