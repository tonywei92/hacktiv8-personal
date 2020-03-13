/* 
====================
Count Place Distance
====================

[INSTRUCTION]
Fungsi countDistance dibuat untuk menghitung jarak dua tempat yang diwakili oleh huruf 'o' di dalam array multidimensi
Terdapat 2 parameter yang diperlukan oleh fungsi countDistance, param pertama berupa array multidimensi,
param kedua berupa number yang menunjukkan uang yang kita miliki saat ini

Ketika melewati huruf 'x' maka uang pengendara akan berkurang sebesar 10000 , dan jika uang habis atau kurang dari 10000
maka perjalanan akan terhenti

[EXAMPLE]
Input :  
[
  ['', 'o', 'x', 'x', '', 'o'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
] 
dan uang = 40000
output :  
Sisa uang : 20000, jarak tempuh: 30 km 

Input :  
[
  ['', 'o', 'x', 'x', 'x', 'x'],
  ['o', '', '', '', ''],
  ['', '', '', '', ''],
] 
dan uang = 30000
output :  
Uang anda habis, jarak tersisa sampai tujuan adalah 10 km

[RULES]
- Dilarang menggunakan indexOf, sort, includes.
- Dilarang menggunakan regex .match dan lainnya!
*/


function countDistance(arr, money) {
  console.log('\n');
  var moneyLeft = money;
  var start = 0;
  var end = 0;
  var jumps = 0;
  var moneyLeftoutpos = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (end === 0) {


        if (start > 0) {
          if (moneyLeft > 0) {
            if (arr[i][j] === 'x') {
              moneyLeft -= 10000;
            }
          }
          else {
            if (moneyLeftoutpos === 0) {
              moneyLeftoutpos = jumps;
            }
          }
          if (arr[i][j] === 'o') {
            end = jumps;
          }
        }
        else {
          if (arr[i][j] === 'o') {
            console.log('meet end', jumps)
            start = jumps;
          }
        }
        jumps++;
      }
      else {
        break;
      }
    }
    
    return {
      moneyLeft: moneyLeft,
      stepLeft: end - moneyLeftoutpos,
      end: end,
      start: start,
      jumps: (end - start) * 10
    }
  }

}

console.log(countDistance([
  ['', 'o', '', '', 'o'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
], 40000))
// output:
/* Sisa uang : 40000, jarak tempuh: 20 km */

console.log(countDistance([
  ['', '', 'o', '', ''],
  ['', 'x', ''],
  ['', '', '', '', '', 'x'],
  ['', 'o', '', '']
], 50000))
// output:
/* Sisa uang : 30000, jarak tempuh: 120 km */

console.log(countDistance([
  ['', '', '', '', ''],
  ['o', 'x', 'x', 'x', ''],
  ['', '', '', 'x', '', 'x'],
  ['', 'o', '', '']
], 40000))
// output:
/* Uang anda habis, jarak tersisa sampai tujuan adalah 30 km*/

console.log(countDistance([
  ['', 'o', 'x', 'x', 'x', 'x'],
  ['o', '', '', '', ''],
  ['', '', '', '', ''],
], 30000))
// output:
/* Uang anda habis, jarak tersisa sampai tujuan adalah 10 km*/