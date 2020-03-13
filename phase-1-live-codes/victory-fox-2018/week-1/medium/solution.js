function diamond(num) {
  let alas = num + (num - 1);
  let counter = 0;
  let isFinish = false;
  let iCount = 0;
  let board = [];

  while (!isFinish) {

    let result = [];
    let indexAlas = Math.floor(alas/2);

    for (let i = 0; i < alas; i++) {
      if (indexAlas - iCount === i || indexAlas + iCount === i) {
        // result += '$';
        result.push('$');
      } else {
        // result += ' ';
        result.push(' ');
      }
    }

    // console.log(result);
    board.push(result.join(''));
    counter++;
    if (counter > indexAlas) {
      iCount--;
    } else {
      iCount++;
    }

    if (counter === alas) {
      isFinish = true;
    }
  }

  return board.join('\n');
}

console.log(diamond(10));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(4));
