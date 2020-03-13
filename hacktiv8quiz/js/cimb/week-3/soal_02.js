/*
==================
FIND AND COUNT
==================

[INSTRUCTION]
Terdapat function find and count, function ini menerima 2 parameter berupa string, function ini akan mengembalikan jumlah kemunculan parameter kedua di parameter pertama

[EXAMPLES]
input : 
parameter 1 = 'Menari dan bernyanyi'
parameter 2 = 'a'
proses : mencari jumlah kemunculan a di dalam parameter 1
output : 'Terdapat 3 huruf a'

Panjang parameter kedua wajib hanya 1 karakter
input : 
parameter 1 = 'Dilarang merokok disini'
parameter 2 = 'cd'
output : 'Invalid input parameter !'

*/

function findAndCount(str, character) {
  if(character.length === 0 || character.length > 1){
    return 'Invalid Input Parameter !';
  }
  var result = 0;
  for(var i = 0;i<str.length;i++){
    if(str[i].toLowerCase() === character.toLowerCase()){
        result+=1;
    }
  }
  return `terdapat ${result} huruf ${character}`;
}

console.log(findAndCount('Makan dan minum', 'a'))
// 'Terdapat 3 huruf a'
console.log(findAndCount('Memotong dan mengikat', 'm'))
// 'Terdapat 3 huruf m'
console.log(findAndCount('Makan dan minum', ''))
// 'Invalid input parameter !'
console.log(findAndCount('Dilarang buang sampah disini', 'cd'))
//'Invalid input parameter !'
