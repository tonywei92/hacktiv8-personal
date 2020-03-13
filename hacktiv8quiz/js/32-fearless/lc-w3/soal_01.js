/*
==================
Tax Administration
==================

[INSTRUCTION]
Di negara wkwkland, seseorang akan mengurus perpajakan. Untuk bisa mengurus, seseorang harus memiliki beberapa informasi:
1. name: nama yang tertera di KTP (harus memiliki nama, tidak boleh kosong)
2. age: umur pendaftar. Untuk bisa mengurus, minimal berumur 17 tahun.

Program akan mengenerate Tax ID dengan format: WKWK-<TAHUN>. <TAHUN> mewakili selisih tahun 2019 dengan umur.

[EXAMPLES]
input :
  name : ''
  age: 19
output: 
  "NAMA ANDA KOSONG! TIDAK BISA DAFTAR!"

input :
  name : 'Hary Dhimas'
  age: 17
output: 
  "BELUM CUKUP UMUR!"

input :
  name : 'John Snow'
  age: 29
output :
  WKWK-1990

[RULES]
  - WAJIB MENGGUNAKAN PSEUDOCODE !

  //WRITE YOUR PSEUDOCODE HERE !
*/

function taxAdministration(name, age) {
  //your code here
}

console.log(taxAdministration('Hary Dhimas', 17));
//"BELUM CUKUP UMUR!"
console.log(taxAdministration('', 19));
//"NAMA ANDA KOSONG! TIDAK BISA DAFTAR!"
console.log(taxAdministration('John Snow', 29));
//WKWK-1990

