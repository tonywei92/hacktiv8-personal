function countDistance(arr, money) {
  // code anda disini
  let distance = 0;
  let movement = 10;
  let reduceMoney = 10000;
  let start = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!start && arr[i][j] === 'o') {
        start = true;
        distance = 0;
      } else if (money > 0 && arr[i][j] === 'o') {
        return `Sisa uang : ${money}, jarak tempuh: ${distance - movement} km`;
      } else if (arr[i][j] === 'o') {
        return `Uang anda habis, jarak tersisa sampai tujuan adalah ${distance - movement} km`;
      } else if (money && start && arr[i][j] === 'x') {
        money -= reduceMoney;
        if (money === 0) {
          distance = 0;
        }
      }
      distance += movement;
    }
  }
  return `there's no start or end`;
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