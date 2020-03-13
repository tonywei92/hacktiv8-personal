# Money Exchanger

> ⏰ Time Estimation: ~20 mins

## Release 0

Buatlah sebuah variable yang dapat menyimpan data mengenai pecahan uang dan jumlah nya, contoh nya :
nominal 50000 berjumlah 2, nominal 20000 berjumlah 3, nominal 10000 berjumlah 5, nominal 5000 berjumlah 8, nominal 2000 berjumlah 6, nominal 1000 berjumlah 10.

## Release 1

Buat sebuah function bernama 'moneyExchanger' yang menerima 2 parameter, parameter pertama adalah `nominalYangAkanDitukar` (minimal 100000) dan parameter kedua adalah `nominalYangDiutamakan`. Function tersebut akan menghasilkan pecahan uang dari `nominalYangAkanDitukar` dengan ketentuan :
a. Apabila `nominalYangDiutamakan` kosong, maka pecahan nya berurutan mulai dari pecahan terbesar nya
b. Apabila diisi, maka pecahan nya dimulai dari `nominalYangDiutamakan` tsb. `nominalYangDiutamakan` hanya bisa diisi oleh pecahan uang yang ada di nomor 1.
c. Apabila jumlah pecahan tidak mencukupi, maka output nya : 'Uang pecahan tidak mencukupi'

Lihat contoh di bawah ini :

```javascript
function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {
  // your code here...
}

console.log(moneyExchanger(100000))
// [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000))
// [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

console.log(moneyExchanger(100000, 5000))
// Uang pecahan tidak mencukupi
```