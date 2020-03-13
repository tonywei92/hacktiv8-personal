# 2048 <img align="right" width="100" height="70" src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18">

> ⏰ time estimation: 30 Minutes

Kalian diminta untuk membuat solusi dari game 2048. 

**Notes**
- Game ini terdiri dari boards yang tersusun atas angka yang berada pada pola 1, 2, 4, 8, 16, dst.

## Release 0 - insertionSort

Buatlah suatu fungsi bernama **insertionSort** yang menerima sebuah parameter berupa array satu dimensi. Pembuatan sorting **wajib** dilakukan pada **array yang sama** dengan **menggunakan algoritma insertion sort**.

```  javascript
const boards = [1, 2, 4, 2, 1]
// setelah di sort dengan function insertionSort menjadi
[OUTPUT]
// [1, 1, 2, 2, 4]
```

## Release 1 - aggregate

Buatlah sebuah fungsi bernama **aggregate** yang berfungsi untuk menggabungkan **2 angka yang sama** dari yang sudah tersortir.

```javascript
const boards = [1, 8, 1, 1, 1]
// setelah di sort dengan function insertionSort menjadi
// [1, 1, 1, 1, 1, 8]

[PROCESS]
// kemudian gabungkan 1
// [1, 1, 1, 2, 8]

// kemudian gabungkan 1
// [1, 2, 2, 8]

// kemudian gabungkan 2
// [1, 4, 8]

// tidak ada yang bisa digabungkan lagi

[OUTPUT]
// [1, 4, 8]
```

**Notes:**

- Nama variable bebas tetapi wajib deskriptif.
- Diperbolehkan untuk membuat modular function tambahan.
- Diasumsikan angka pada array tersebut tidak akan ada yang invalid.
- Apabila kalian bingung kalian boleh mengganti drive code, dengan catatan nilai kalian akan dikurangi sejumlah perubahan.