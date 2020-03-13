let arr1 = [1, 5, 8, 11, 16, 17, 23, 38, 40, 48, 51, 53, 54, 55, 57, 183];
let arr2 = [12, 24, 25, 38, 47, 48, 53, 55, 56, 59, 62, 63, 69, 72, 72, 74, 75, 75, 77, 78, 80, 81, 85, 94, 97]
let arr3 = [12, 24, 25, 38, 47, 48, 53]


function Snakers(arr) {
  let length = Math.sqrt(arr.length);
  let newArr = [];
  if (length % 1 == 0) {
    for (let i = 0; i < length; i++) {
      let row = [];

      for (let j = 1; j <= length; j++) {
        let idx = i * length + j - 1;
        if ((i + 1) % 2 == 0) {
          row[length - j] = arr[idx];
        } else {
          row.push(arr[idx]);
        }
      }

      newArr.push(row);
    }
  } else {
    console.log("Array tidak dapat di proses");
  }
  return newArr;
}

function sort(){

}

console.log(Snakers(arr1));
