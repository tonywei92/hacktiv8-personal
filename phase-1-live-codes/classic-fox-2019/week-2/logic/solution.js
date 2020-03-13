function rotatingBox(width, height, direction = 0) {
  console.clear()
  console.log(`size: ${width} x ${height}`);

  // console.log(direction);
  let draw = []
  for (let y = 0; y <= (height * 2) + width - 3; y++) {
    draw.push([])
    for (let x = 0; x <= (height * 2) + width - 3; x++) {
      draw[y][x] = ' '
      // buat jarum
      switch (direction) {
        case 0:
          // atas
          if ((y === 0) && x >= height - 1 && x < height + width - 1) {
            draw[y][x] = '-'
          }
          else if (y < height && (x === height - 1 || x === height + width - 2)) {
            draw[y][x] = '|'
          }
          break;
        case 1:

          //kanan
          if ((y === height - 1 || y === height + width - 2) && x > height + width - 2) {
            draw[y][x] = '-'
          }
          else if ((y > height - 1 && y < height + width - 2) && x === (height * 2) + width - 3) {
            draw[y][x] = '|'
          }
          break;
        case 2:
          //bawah
          if (y == (height * 2) + width - 3 && x >= height - 1 && x < height + width - 1) {
            draw[y][x] = '-'
          }
          else if (y > height + width - 3 && (x === height - 1 || x === height + width - 2)) {
            draw[y][x] = '|'
          }
          break;
        case 3:
          //kiri
          if ((y === height - 1 || y === height + width - 2) && x < height) {
            draw[y][x] = '-'
          }
          else if ((y > height - 1 && y < height + width - 2) && x === 0) {
            draw[y][x] = '|'
          }
          break;
      }

      //buat center
      if ((y === height - 1 || y === height + width - 2) && (x >= height-1 && x < height + width -1)) {
        draw[y][x] = '-'
      }
      else if (y >= height && y < height + width - 2 && (x === height - 1 || x === height + width - 2)) {
        draw[y][x] = '|'
      }
    }
    console.log(draw[y].join(''));
  }

  direction++
  if(direction===4){
    direction=0
  }
  setTimeout(function(){
    rotatingBox(width, height, direction)
  }, 1000)
}

rotatingBox(3, 6)