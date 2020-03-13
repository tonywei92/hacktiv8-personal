const generateTriangle = (size) => {
  for (let i = 0; i < size; i++) {
    let temp = ''
    for (let j = 0; j < size * 2 - 1; j++) {
      if ( j ===  size - 1 * 2 - i  && i !== size - 1 ) {
        temp += '  *'
      } else if (j ===  size - 1 * 2 + i && i !== size - 1 ) {
        temp += ' *'
      } else if ( i === size - 1 ) {
        temp += '* '
      } else {
        temp += '  '
      }
    }
    console.log(temp)
  }
}

const generateSquare = (size, heightDoor, widthDoor) => {
  for (let i = 1; i < size; i++) {
    let temp = ''
    for ( let j = 0; j < size * 2 - 1; j++) {
      const topSideDoorCoor = size - heightDoor
      const bottomSideDoorCoor = size - 1
      const leftSideDoorCoor = size - 1 - Math.floor(widthDoor / 2)
      const rightSideDoorCoor = size - 1 + Math.floor(widthDoor / 2)
      if ( i >= topSideDoorCoor && j >= leftSideDoorCoor  && j <= rightSideDoorCoor) {
        if ( i === topSideDoorCoor || i === bottomSideDoorCoor || j === rightSideDoorCoor || j === leftSideDoorCoor) {
          temp += '# '
        } else {
          temp += '  '
        }
      } else if ( (i === bottomSideDoorCoor && j !== 0 && j !== size * 2 - 2 ) || j === 1 || j === size * 2 - 3 ) {
        temp += '* '
      } else {
        temp += '  '
      }
    }
    console.log(temp)
  }
}

const generateHouse = (size, heightDoor, widthDoor) => {
  generateTriangle(size)
  generateSquare(size, heightDoor, widthDoor)
}

generateHouse(5, 3, 3)
generateHouse(6, 4, 3)