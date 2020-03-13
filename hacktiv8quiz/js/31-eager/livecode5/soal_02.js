/*
===========================
Tambah penumpang Bus
============================

[INSTRUCTION]
Terdapat function tambahPenumpangBus yang menerima 2 parameter berupa :
: 
1. array multidimensi yang berisi kondisi penumpang bus yang sudah menaiki bus
2. array penumpang bus yang ingin menaiki bus
Fungsi ini akan mengembalikan array multidimensi yang sudah terisi oleh semua penumpang jika jumlah bangku yang kosong dan penumpang yang ingin naik pas / sama. (LIHAT EXAMPLE 1)
Sedangkan fungsi ini akan mengembalikan string berupa list penumpang yang tidak mendapatkan kursi, jika jumlah bangku yang kosong tidak mencukupi (LIHAT EXAMPLE 2)

[EXAMPLES]
input 1 : 
  [
    ['Hary', '', 'Miftah'],
    ['', 'Tony', ''],
    ['Udin', 'Paijo', 'Butet']
  ]
input 2 : ['Budi', 'Soleh', 'Miku']
output :
  [
    ['Hary', 'Budi', 'Miftah'],
    ['Soleh', 'Tony', 'Miku'],
    ['Udin', 'Paijo', 'Butet']
  ]
--------------------------------------------
input 1 : 
  [
    ['Udin', '', ''],
    ['', '', 'Dede'],
    ['Saiful', 'Paijo', 'Butet']
  ]
input 2 : ['Alucard', 'Balmond', 'Eudora', 'Nana', 'Miya', 'Zilong','Layla', 'Grock']
output :
'Miya, Zilong, Layla, dan Grock tidak mendapatkan kursi bus. Silahkan cari bus lainnya'


[Rules]:
- Dilarang menggunakan fungsi map, reduce, filter

*/

function tambahPenumpangBus(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] === '') {
        arr1[i][j] = arr2[0];
        arr2 = arr2.slice(1);
      }
    }
  }
  if (arr2.length > 0) {
    return (
      tambahDan(arr2) +
      ' tidak mendapatkan kursi bus. Silahkan cari bus lainnya'
    );
  }
  return arr1;
}

function tambahDan(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i]);
  }
  return newArr.join(', ') + ' dan ' + arr[arr.length - 1];
}

console.log(
  tambahPenumpangBus(
    [['Hary', '', 'Miftah'], ['', 'Tony', ''], ['Udin', 'Paijo', 'Butet']],
    ['Budi', 'Soleh', 'Miku']
  )
);
/*
[
  ['Hary', 'Budi', 'Miftah'],
  ['Soleh', 'Tony', 'Miku'],
  ['Udin', 'Paijo', 'Butet']
]
*/

console.log(
  tambahPenumpangBus(
    [['Udin', '', ''], ['', '', 'Dede'], ['Saiful', 'Paijo', 'Butet']],
    ['Alucard', 'Balmond', 'Eudora', 'Nana', 'Miya', 'Zilong', 'Layla', 'Grock']
  )
);
/*
output :
'Miya, Zilong, Layla, dan Grock tidak mendapatkan kursi bus. Silahkan cari bus lainnya'
*/
