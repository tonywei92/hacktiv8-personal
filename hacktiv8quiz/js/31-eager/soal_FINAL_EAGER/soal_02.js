/*
====================
STUDENT ELIMINATION 
====================

[INSTRUCTION]
Terdapat function studentElimination , function akan mengembalikan list student yang memiliki nilai 
diatas 80, dan akan menambahkan imbuhan Mr. atau Ms. tergantung dengan gender tiap student.
function akan menerima sebuah parameter berupa array.

[EXAMPLE]
input : 'Miftah,male,80', 'Dhimas,male,70', 'Budi,male,93', 'Toni,male,82', 'Nita,female,87'
output : ['Mr. Miftah', 'Mr. Budi', 'Mr.Toni', 'Ms. Nita']

[RULES]
- dilarang menggunakan REGEX
- dilarang menggunakan substring, substr, slice, splice
*/

var siswa = [
  'Miftah,male,80',
  'Dhimas,male,70',
  'Budi,male,93',
  'Toni,male,82',
  'Nita,female,87'
];

function eliminasiSiswa(list) {
  var arr = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i].split(',');
    if (item[2] >= 80) {
      arr.push(`${item[1] === 'male' ? 'Mr.' : 'Ms.'} ${item[0]}`);
    }
  }
  return arr;
}

console.log(eliminasiSiswa(siswa));
// ['Mr. Miftah', 'Mr. Budi', 'Mr.Toni', 'Ms. Nita']
