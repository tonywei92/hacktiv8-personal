function moveZeros (values) {
  const result = [];
  let zerosCount = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== 0) {
      result.push(values[i]);
    } else {
      zerosCount++;
    }
  }
  for (let i = 0; i < zerosCount; i++) {
    result.push(0);
  }
  return result;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
// [ false, 1, 1, 2, 1, 3, 'a', 0, 0]

console.log(moveZeros([undefined, null, 0, 1, 1, 0]));
// [ undefined, null, 1, 1, 0, 0 ]

console.log(moveZeros([1, 2, 3, 4, 5, 6, 7]));
// [1, 2, 3, 4, 5, 6, 7]
