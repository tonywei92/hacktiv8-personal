function generateBoard(num) {
  let count = num * num;
  let row = num;
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push([]);
    if (i % 2) {
      for (let j = count; j > count - num; j--) {
        result[result.length - 1].push(j);
      }
    } else {
      for (let j = count - num + 1; j <= count; j++) {
        result[result.length - 1].push(j);
      }
    }

    count -= num;
  }
  return result;
}

console.log(generateBoard(10));
