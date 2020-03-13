function box(width, half) {
  let drawBox = ''
  let boxHeight = half ? Math.ceil(width/2) : width
  for (let i = 0; i < boxHeight; i++) {
    if((i === 0 && !half) || i === boxHeight - 1) {
      drawBox += ' ' + '*'.repeat(width)
    } else {
      drawBox += ' *' + ' '.repeat(width - 2) + '*'
    }
    if(i !== boxHeight - 1) {
      drawBox += '\n'
    }
  }
  return drawBox
}

function triangle(width, half) {
  let drawTriangle = ''
  let maxHeight = Math.ceil((width + 2)/2)
  let triangleHeight = half ? Math.ceil(maxHeight/2) : maxHeight
  for(let i = 0; i < triangleHeight; i++) {
    for(let j = 0; j < width + 2; j++) {
      if(i + j === triangleHeight - 1 || i + width - triangleHeight + 2 === j) {
        drawTriangle += '*'
      } else if(i === triangleHeight - 1) {
        drawTriangle += '*'
      } else {
        drawTriangle += ' '
      }
    }
    if(i !== triangleHeight - 1) {
      drawTriangle += '\n'
    }
  }
  return drawTriangle
}

function main(order, width) {
  let draw = ''
  for(let i = 0; i < order.length; i++) {
    let isHalf = i === order.length - 1 ? false : true;
    if(order[i] === 'b') {
      draw = box(width, isHalf) + '\n' + draw
    } else if (order[i] === 't') {
      draw = triangle(width, isHalf)  + '\n' + draw
    }
  }
  console.log(draw.slice(0,-1))
}

const order = process.argv[2] // pesanan berupa string b untuk box t untuk triangle
const width = Number(process.argv[3]) // lebar dari box dan segitiga

main(order, width) // example node index.js tbtbt 3