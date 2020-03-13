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

function binary_search(key, array) {
  selectionSort(array);
  let l = 0;
  let r = array.length - 1;

  while (r >= l) {
    let mid = Math.floor(l + (r - l) / 2);
    if (array[mid] === key) {
      return mid;
    }
    if (array[mid] > key) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

console.log(binary_search(3, [1, 2, 3, 4, 5]) === 2);
console.log(binary_search(35, [13, 19, 24, 29, 32, 37, 43]) === -1);
console.log(binary_search(135, [100, 120, 130, 135, 150, 170]) === 3);
