function lompatanKuda(boardPosition) {
  const alphabetPosition = 'ABCDEFGH';
  const numberPosition = '12345678';
  const horseI = alphabetPosition.indexOf(boardPosition[0]);
  const horseJ = numberPosition.indexOf(boardPosition[1]);
  const possibilities = [
    {i: -2, j: -1},
    {i: -2, j: 1},
    {i: -1, j: 2},
    {i: -1, j: -2},
    {i: 1, j: 2},
    {i: 1, j: -2},
    {i: 2, j: -1},
    {i: 2, j: 1},
  ];

  let correct = 0;
  possibilities.forEach(possible => {
    const constrainI = horseI + possible.i;
    const constrainJ = horseJ + possible.j;
    if(constrainI < 8 && constrainI >= 0 && constrainJ < 8 && constrainJ >=0) {
      correct++;
    }
  });
  
  return correct;
}

console.log(lompatanKuda('C4')) // 8
console.log(lompatanKuda('F7')) // 6
console.log(lompatanKuda('G7')) // 4
console.log(lompatanKuda('G8')) // 3
console.log(lompatanKuda('A1')) // 2