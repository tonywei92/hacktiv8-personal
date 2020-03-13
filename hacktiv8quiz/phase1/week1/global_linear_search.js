let banana_arr = "banana".split("");

function globalLinearSearch(key, array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      result.push(i);
    }
  }
  return result;
}
console.log(globalLinearSearch("a", banana_arr));
