# Lompatan Kuda<img align="right" height="70" width="100" src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18">

![Difficulty Hard](https://img.shields.io/badge/Difficulty-HARD-red)

> ⏰ Time limit: **50 min**

Dalam sebuah permainan catur. Bidak kuda dapat berpindah tempat seperti huruf L
![ss](ss.gif)

Dalam permainan catur terdapat papan 8 x 8.
Tugas kamu adalah menghitung jumlah kemungkinan jalannya suatu bidak kuda dihitung dari posisi kudanya.

Bila dilihat dari contoh gambar diatas. Posisi bidak kuda berada di E4, maka output yang di harapkan adalah 8. Karena kuda dapat bergerak sebanyak 8 kemungkinan, yaitu ditunjukkan dengan warna hijau.

```javascript
console.log(lompatanKuda('C4')) // 8
console.log(lompatanKuda('G7')) // 4
console.log(lompatanKuda('A1')) // 2
```