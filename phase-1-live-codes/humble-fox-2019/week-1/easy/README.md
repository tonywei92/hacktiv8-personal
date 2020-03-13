# Count Distance
> ⏰ Time Estimation: 30 mins

Pada function count distance akan menghitung total pergerakan orang yang diwakili oleh huruf 'o' hingga gerakan
'o' yang terakhir. Terdapat huruf 'x' untuk menunjukkan orang harus bayar 10000. Function ini menerima dua input
yaitu arr dan money.

**Contoh Input dari Parameter**
``` javascript
const arr = [
  ['', 'o', 'x', 'x', '', 'o'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
]
const money = 40000
```
(*) 'o' ke 'o' merupakan jarak yang ditempuh
(*) 'x' bila berada pada selang jarak 'o' ke 'o', maka orang harus bayar 10000

**Cara Kerja**

Apabila uang masih tersisa atau lebih dari 0 maka pemain boleh melanjutkan perjalanan. Apabila hingga ketemu 'o'
lagi maka tentukan distance total yang ditempuh. Apabila dalam perjalanan uang habis atau sama dengan 0 maka, kembalikan
jarak yang tersisa dari tempat 'x' habis uang ke 'o' tujuan.

``` javascript
  /*
  Input :  
  [
    ['', 'o', 'x', 'x', '', ''],
    ['', '', 'o', '', ''],
    ['', '', '', '', ''],
  ] 
  dan uang = 40000
  Process :
  [
    ['', 'o', '10', '20', '30', '40'],
    ['50', 60', 'o', '', ''],
    ['', '', '', '', '']
  ]
  output :  
  Sisa uang : 20000, jarak tempuh: 60 km 
  Input :  
  [
    ['', 'o', 'x', 'x', 'x', 'x'],
    ['o', '', '', '', ''],
    ['', '', '', '', ''],
  ] 
  dan uang = 30000
  Process :
  [
    ['', 'o', 'x', 'x', 'habis uang', '10'],
    ['o', '', '', '', ''],
    ['', '', '', '', ''],
  ] 
  output :  
  Uang anda habis, jarak tersisa sampai tujuan adalah 10 km
  */
```

## Release 0
Tentukanlah jarak dari 'o' ke 'o', tanpa menghiraukan harus bayar atau tidak.
```javascript
function countDistance(arr, money) {
  // code anda disini
}
console.log(countDistance([
  ['', 'o', '', '', 'o'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
], 40000))
// output:
/* jarak tempuh: 20 km */
```

## Release 1
Setelah menyelesaikan release 0. Kemudian hanya kembalikan output dari orang yang tidak kehabisan uang.
```javascript
function countDistance(arr, money) {
  // code anda disini
}
console.log(countDistance([
  ['', '', 'o', '', ''],
  ['', 'x', ''],
  ['', '', '', '', '', 'x'],
  ['', 'o', '', '']
], 50000))
// // output:
// /* Sisa uang : 30000, jarak tempuh: 120 km */
```

## Release 2
Setelah menyelesaikan release 1. Kemudian handle kasus jarak tersisa dari orang yang kehabisan uang.
```javascript
function countDistance(arr, money) {
  // code anda disini
}
console.log(countDistance([
  ['', '', '', '', ''],
  ['o', 'x', 'x', 'x', ''],
  ['', '', '', 'x', '', 'x'],
  ['', 'o', '', '']
], 40000))
// // output:
// /* Uang anda habis, jarak tersisa sampai tujuan adalah 30 km*/
```

Notes:

Silahkan membuat function/fungsi tambahan jika dibutuhkan