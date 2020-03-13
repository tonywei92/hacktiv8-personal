### GET MONEY CHANGE
###### Estimasi waktu: 30 Menit

Buatlah sebuah fungsi bernama `getMoneyChange` yang bertujuan untuk mendapatkan total kembalian dari suatu pembayaran. Fungsi akan menerima satu input berupa uang yang dibayarkan dan akan menampilkan pesan dengan format `<uang> <jumlah lembaran> lembar`

#### Rules
- Untuk stok uang kembalian sudah disediakan dalam bentuk `object literal`. Pastikan kode yang kamu buat dinamis sehingga program kamu dapat mengatasi stok uang dan jenis uang kembalian yang dapat diubah nilainya.
- Urutan nilai uang yang ditampilkan adalah dari yang terbesar ke yang terkecil.
- Apabila stock uang kembalian tidak mencukupi maka tampilkan `Maaf uang kembalian tidak cukup` dan value dari variabel
moneyDictionaries tidak berkurang

```javascript
const moneyStocks = {
  100000: 1,
  50000: 3,
  20000: 4,
  10000: 5,
  5000: 5,
  1000: 10,
  500: 5
}

getMoneyChange(75000)
/*
  50000 1 lembar
  10000 2 lembar
  5000 1 lembar
*/


getMoneyChange(190000)
/*
  Maaf uang kembalian tidak cukup
*/

console.log(moneyDictionaries);
/*
{ '500': 5,
  '1000': 10,
  '5000': 4,
  '10000': 5,
  '20000': 3,
  '50000': 2,
  '100000': 1 }
*/

```
