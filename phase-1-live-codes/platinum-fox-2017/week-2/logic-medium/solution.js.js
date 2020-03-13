function daleman(col, row) {
  // let content = []
  let maxCol = row + col
  let jumlahRow = row


  for(let i=0; i<row; i++) {
    let row = []

    let tandaPertama = i
    let tandaKedua = i+col

    for(let j=0; j<maxCol; j++) {
      if(j == tandaPertama || j == tandaKedua) {
        row.push('\\')
      } else if(tandaPertama < j && j < tandaKedua) {
        row.push('#')
      } else {
        row.push(' ')
      }
    }
    console.log(row.join(' '))
  }
}

// console.log(daleman(5,3))

function header(p, l) {
  let row = []

  for(let j=0; j<p; j++) {
    row.push("-")
  }

  return row
}

function footer(p, l) {
  let row = []

  for(let j=0; j<p+l; j++) {
    if(j < l) {
      row.push(" ")
    } else {
      row.push("-")
    }
  }

  return row
}

// console.log(headerFooter(5, 3))

function jajar(p,l) {
  // let board = []

  console.log(header(p,l).join(' '))
  daleman(p,l)
  console.log(footer(p,l).join(' '))

  // return board
}

jajar(5,4)
jajar(3,3)
jajar(2,4)
