/*
======================
PHONE NUMBER VALIDATOR
======================

[INSTRUCTION]
Terdapat function phoneNumberValidator , function ini menerima array of string (nomor telepon)
function akan melakukan validasi pada tiap nomor telepon.
Validation rules:
- nomor telepon memiliki panjang minimal 9 angka, serta panjang maksimal 12 angka
- nomor telepon harus diawali dengan '+62' atau '08'

[EXAMPLE]
input: ['+6289507544', '089577888', '99944477']
output: ['+6289507544', '089577888', 'Invalid phone number']

input: ['+628555', '0894333', '+6277422312']
output: ['Invalid phone number', Invalid phone number', '+6277422312']

[RULES]
- WAJIB MENGGUNAKAN PSEUDOCODE ATAU ALGORITMA
- TIDAK ADA PSEUDOCODE NILAI 0
- dilarang menggunakan fungsi array selain .push dan .length

*/

function phoneNumberValidator(arr) {
  //your code here
}

console.log(phoneNumberValidator(['+6289507544', '089577888', '99944477']));
//['+6289507544', '089577888', 'Invalid phone number']

console.log(phoneNumberValidator(['+628555', '0894333', '+6277422312']));
//['Invalid phone number', Invalid phone number', '+6277422312']
