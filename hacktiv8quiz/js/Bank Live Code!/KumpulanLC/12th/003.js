/*
  ================
  ARR SLICE
  ================
  description: Arr slice adalah sebuah function untuk memotong nilai array yang sudah ditentukan batas indexnya
               sama seperti kita menggunakan arr.slice(). Function akan mengembalikan nilai berupa array
               yang valuenya sudah dipotong  range mulai dari nilai min sampai nilai max ( PAHAMI CARA KERJA ARR SLICE)

  rules:
  1. tidak boleh menggunakan built in function ARR.SLICE() dan ARR.SPLICE()
  2. Function menerima parameter berupa array data, batas minimum, dan batas maksimum
  3. Asumsi parameter min dan max selalu memiliki nilai dan type datanya number
  4. Cara kerja function sama seperti cara kerja arr.slice()
  examples:
  1. INPUT = [1, 2, 3, 4, 5] dan nilai min = 2, nilai max = 4
     OUTPUT = [3, 4]
*/

function arrSlice ( arr, min, max ) {
   
}

console.log(arrSlice([7, 4, 3, 2, 1, 2, 1], 4, 7)) // [ 1, 2, 1 ]
console.log(arrSlice([1, 4, 0, 4, 5], 1, 3)) // [ 4, 0 ]
console.log(arrSlice([1, 2, 3, 4, 5], 0, 1)) // [ 1 ]
console.log(arrSlice([5, 4, 3, 2, 1], 0, 2)) // [ 5, 4 ]
console.log(arrSlice([1, 2, 3, 4, 5], 2, 4)) // [ 3, 4]
