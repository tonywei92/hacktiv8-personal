/*
========================
Recursive: Vocal Reducer
========================

[INSTRUCTIONS]
vocalReducer adalah sebuah function yang menerima satu parameter berupa string.
Function akan memproses string dengan menghilangkan huruf vocal ('a', 'i', 'u', 'e', 'o') yang ada di dalam string tersebut.
Function akan mereturn sebuah string tanpa huruf vocal tersebut

[RULE]
- Wajib menggunakan cara recursive
- Boleh menggunakan 1 looping for/while
- dilarang menambahkan parameter di function DAN membuat variabel di luar function yang telah disediakan
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
input: 'abcdefghij'
proses: kita membuang huruf vocal, dalam string tersebut adalah a, e, i.
output: 'bcdfghj'

input: 'phyt'
proses: tidak ada yang hapus
output: 'phyt'
*/

function vocalReducer(string) {
  // Code here

}

console.log(vocalReducer('abcdefghij')); // 'bcdfghj'
console.log(vocalReducer('phyt')); // 'phyt'
console.log(vocalReducer('semoga berhasil')); // 'smg brhsl'
console.log(vocalReducer('semangat')); // 'smngt'
