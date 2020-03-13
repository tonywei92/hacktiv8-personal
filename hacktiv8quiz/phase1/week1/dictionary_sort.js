function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = array[i];
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (min > array[j]) {
        // console.log(min, array[j]);
        min = array[j];
        indexMin = j;
      }
    }
    let temp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = temp;
  }
  return array;
}

console.log(selectionSort(["makan", "duduk", "tidur", "terbang"]));
console.log(selectionSort(["anggi", "angga", "ani", "adi"]));
