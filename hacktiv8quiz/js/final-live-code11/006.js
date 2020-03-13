/*
======================
Array Mapper Recursive
======================

[INSTRUCTIONS]
arrayMapper adalah sebuah function yang menerima tiga parameter.
Parameter pertama adalah sebuah array yang bisa terdiri dari tipe data apapun.
Parameter kedua adalah simbol matematika, penambahan, atau simbol pembanding.
Parameter ketiga adalah nilai yang akan menjadi efek operasi atau pembanding.

Untuk setiap nilai array, isi dari masing-masing array akan di operasikan dengan simbol dan effect.
Simbol +, -, *, dan / akan menjalankan proses matematika pada angka.
Simbol + pada string akan melakukan penggabungan string.
Simbol ^ pada angka akan melakukan perpangkatan.
Simbol === akan melakukan perbandingan.

Contoh:
  targetArr: [1, 2, 3, 4, 5]
  operator: +
  effect: 5
  maka, setiap isi array akan ditambahkan dengan 5, sehingga,
  output: [6, 7, 8, 9, 10]

Contoh 2:
  targetArr: [1, 2, 1]
  operator: ^
  effect: 3
  maka, setiap isi array akan dipangkatkan dengan 3, sehingga,
  output: [1, 8, 1]

[RULES]
- WAJIB menggunakan recursive
- DILARANG menggunakan LOOPING
- DILARANG menggunakan REGEX
*/

function arrayMapper(targetArr, operator, effect) {

  if (targetArr.length === 0) {
    return [];
  }
  if (operator === '-') {
    return [targetArr[0] - effect].concat(arrayMapper(targetArr.slice(1), operator, effect));
  }
  else if (operator === '+') {
    return [targetArr[0] + effect].concat(arrayMapper(targetArr.slice(1), operator, effect));
  }
  else if (operator === "===") {
    return [targetArr[0] === effect].concat(arrayMapper(targetArr.slice(1), operator, effect));
  }
  else if (operator === '^') {
    var res = 1;
    for (var j = 0; j < effect; j++) {
      res = res * targetArr[0];
    }
    return [res].concat(arrayMapper(targetArr.slice(1), operator, effect));
  }
  else if (operator === "/") {
    return [targetArr[0] / effect].concat(arrayMapper(targetArr.slice(1), operator, effect));
  }
  else {
    return ["invalid operator"]
  }
}

console.log(arrayMapper([1, 2, 3, 4, 5], '-', 3)); // [-2, -1, 0, 1, 2]
console.log(arrayMapper(['A', 'B', 'C', 'D'], '+', 'X')); // ['AX', 'BX', 'CX', 'DX']
console.log(arrayMapper([true, false, true, false], '===', false)); // [false, true, false, true]
console.log(arrayMapper([1, 5, 3, 4], '^', 2)); // [1, 25, 9, 16]
console.log(arrayMapper([8, 4, 2, 10], '/', 2)); // [4, 2, 1, 5]