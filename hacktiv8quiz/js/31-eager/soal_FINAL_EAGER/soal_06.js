/*
======================
RANGKAI HURUF REKURSIF
======================

[INSTRUCTION] 
Terdapat function rangkai huruf rekursif , function ini menerima parameter berupa number.
Function akan mengembalikan nilai berupa list huruf yang sudah dirangkai sedemikian rupa (lihat contoh).

[EXAMPLE]
input: 5
proses: rangkaian kata akan dimulai dari huruf abjad ke - 5 (e) dan akan kembali lagi ke (e)
output: e-d-c-b-a-b-c-d-e

input: 3
output: c-b-a-b-c

[RULES]
- dilarang menggunakan looping 
- HARUS MENGGUNAKAN REKURSIF

*/

function rangkaiHuruf(num) {
  if (num === undefined) {
    return 'invalid parameter input';
  }
  if (num > 26) {
    return 'invalid parameter input';
  }
  var libRev = ' zyxwvutsrqponmlkjihgfedcba';

  if (num === 1) {
    return 'a';
  }

  return (
    libRev[26 - num + 1] +
    '-' +
    rangkaiHuruf(num - 1) +
    '-' +
    libRev[26 - num + 1]
  );
}

console.log(rangkaiHuruf(5));
/*
  e-d-c-b-a-b-c-d-e
*/

console.log(rangkaiHuruf(26));
/*
  z-y-x-w-v-u-t-s-r-q-p-o-n-m-l-k-j-i-h-g-f-e-d-c-b-a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z
*/

console.log(rangkaiHuruf());
// Invalid Parameter Input

console.log(rangkaiHuruf(27));
// Invalid Parameter Input
