function countDistance(arr, money) {
  // code anda disini
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
// // output:
// /* Sisa uang : 30000, jarak tempuh: 120 km */
console.log(countDistance([
  ['', '', '', '', ''],
  ['o', 'x', 'x', 'x', ''],
  ['', '', '', 'x', '', 'x'],
  ['', 'o', '', '']
], 40000))
// // output:
// /* Uang anda habis, jarak tersisa sampai tujuan adalah 30 km*/
console.log(countDistance([
  ['', 'o', 'x', 'x', 'x', 'x'],
  ['o', '', '', '', ''],
  ['', '', '', '', ''],
], 30000))
// // output:
// /* Uang anda habis, jarak tersisa sampai tujuan adalah 10 km*/