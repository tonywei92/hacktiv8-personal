/*
====================
TimeConverter
====================

[INSTRUCTION]
Terdapat function timeConvert yang menerima string (bisa tahun atau bulan),
function ini akan mengubah input yang diterima menjadi satuan waktu dalam penanggalan jawa triwulan, caturwulan, dan semester
1 triwulan = 3 bulan
1 caturwulan = 4 bulan
1 semester = 6 bulan

[EXAMPLE]
input: '10 tahun'
proses: mengkonversi angka tahun menjadi semester, caturwulan, dan triwulan
output: '10 tahun sama dengan 20 semester, 30 caturwulan, dan 40 triwulan.'

input: '8 bulan'
output: '8 bulan sama dengan 1 semester 2 bulan, 2 caturwulan, dan 2 triwulan 2 bulan.

input: '21 bulan'
output: '21 bulan sama dengan 3 semester 3 bulan, 5 caturwulan 1 bulan, dan 7 triwulan.'

[RULES]
- dilarang menggunakan fungsi slice, split, substring, substr
- dilarang menggunakan fungsi es 6
*/

function timeConverter(date) {
  //your code here
}

console.log(timeConverter('10 tahun'));
// '10 tahun sama dengan 20 semester, 30 caturwulan, dan 40 triwulan.'

console.log(timeConverter('8 bulan'));
// '8 bulan sama dengan 1 semester 2 bulan, 2 caturwulan, dan 2 triwulan 2 bulan.'

console.log(timeConverter('21 bulan'));
// '21 bulan sama dengan 3 semester 3 bulan, 5 caturwulan 1 bulan, dan 7 triwulan'

console.log(timeConverter('3 tahun'))
// '3 tahun sama dengan 6 semester, 9 caturwulan, dan 12 triwulan.'

console.log(timeConverter('2 bulan'))
// 'Minimal input 6 bulan'





