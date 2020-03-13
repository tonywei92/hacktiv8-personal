/*
========================================
FILTER DUPLICATE PROCESSING
========================================

[INSTRUCTION]
Terdapat function filterDuplicateProcess yang menerima sebuah parameter berupa array of number,
function akan mengfilter angka yang duplikat didalam array dan mereturn output berupa string seperti contoh dibawah ini.

[EXAMPLE]
input: [4, 1, 1, 4, 4, 12 ]
proses : melakukan filter pada angka yang duplicate dalam array dan menjumlah angka-angka yang telah di filter, 
function juga mencari generator yang didapat dari angka unik dan jumlah kemunculannya 4-3-1-2-12-1 didapat dari angka unik 4 - 3 (3 merupakan jumlah kemunculan angka 4)
dst
output: 'Terdapat 3 angka unik di array : 4, 1, dan 12. Total angka unik : 17. generator 4-3-1-2-12-1'


[RULES]
- Dilarang menggunakan fungsi es 6 map , reduce, filter
- dilarang menggunakan indexOf, include, sort

*/

function filterDuplicateProcess(numberArr) {
  var result = [];
  for (var i = 0; i < numberArr.length; i++) {
    var found = false;
    for (var j = 0; j < result.length; j++) {
      if (result[j][0] === numberArr[i]) {
        result[j].push(numberArr[i]);
        found = true;
      }
    }
    if (!found) {
      result.push([numberArr[i]]);
    }
  }

  var generator = [];
  var unik = [];
  for (var i = 0; i < result.length; i++) {
    generator.push(result[i][0]);
    generator.push(result[i].length);
    unik.push(result[i][0]);
  }
  var jumlah = unik.length;
  var sum = 0;
  for (var i = 0; i < unik.length; i++) {
    sum += unik[i];
  }
  var stringDan = "";

  if (unik.length > 1) {
    var unikBaru = [];
    for (var i = 0; i < unik.length-1; i++) {
      unikBaru.push(unik[i]);
    }

    stringDan = unikBaru.join(',');
    stringDan+= " dan " + unik[unik.length-1];
  }
  else{
    stringDan = unik.join(',');
  }
  
  return `Terdapat ${jumlah} angka unik di array: ${stringDan}. Total angka unik: ${sum}. generator: ${generator.join('-')}`
}

console.log(filterDuplicateProcess([4, 1, 1, 4, 4, 12]));
// 'Terdapat 3 angka unik di array : 4, 1 dan 12. Total angka unik : 17. generator: 4-3-1-2-12-1'

console.log(filterDuplicateProcess([3,3,1]))
// // 'Terdapat 2 angka unik di array : 3 dan 1. Total angka unik : 4. generator: 3-2-1-1'

console.log(filterDuplicateProcess([1,1,1,1,1,1]))
// 'Terdapat 1 angka unik di array : 1. Total angka unik : 1. generator: 1-6'