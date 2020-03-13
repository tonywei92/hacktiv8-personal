/*
================
Treasure Hunter
================
[INSTRUCTIONS]
treasureHunt adalah sebuah function yang menerima satu parameter berupa string.
function akan mereturn berapa banyak jumlah harta karun (simbol) yang ada di dalam string tersebut.
harta karun atau simbol yang dicari adalah:
'!', '@', '#', '$', '%', '^', '&', '*', '(', ')'
Jika tidak ada simbol pada string tersebut, maka function akan mereturn 'harta karun tidak ditemukan'
[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string & array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
[EXAMPLE]
treasureHunt("alskdj*lakjsd761^%")
output: 3
*/

function treasureHunt(str) {
  var treasures = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  var treasuresCount = 0;
  for(var i = 0; i < treasures.length; i++){
    for (var j = 0; j < str.length; j++) {
      if(treasures[i] === str[j]){
        treasuresCount++;
      }
    }
  }
  if(treasuresCount === 0){
    return 'harta karun tidak ditemukan';
  }
  return treasuresCount;
}

console.log(treasureHunt("alskdj*lakjsd761^%")); // 3
console.log(treasureHunt("4pa!n!")); // 2
console.log(treasureHunt("bin*ngbin*ang@!*&^")); // 7
console.log(treasureHunt("sAndIkhUsus")); // 'harta karun tidak ditemukan'
console.log(treasureHunt("ki(*^hasd*&^%ja(*")); // 9