<img src="https://hacktiv8.com/img/logo-hacktiv8_bordered.png__vzu2vhp2VRX%2Bewg7J0bPlaAf7ee5fc69819b5ef3849344c119f5e18" align="right" />

## Live Code Week 1

# Manipulasi Array
![Easy](https://img.shields.io/badge/Difficulty-Easy-green.svg)

> ⏰ Time limit: **30 min**

Diberikan array yang akan diisi angka 0 sepanjang `n` yang dimulai dari index `1` dan sebuah daftar operasi,
Untuk masing-masing operasi adalah menambahkan nilai `k` ke masing-masing elemen array
dengan _range_ dari `a` sampai `b`. Setelah semua operasi selesai dijalankan, carilah nilai __maksimum__
dari array.

contohnya, bila panjang array adalah `10` dan list operasi adalah sebagai berikut:
```
a b k
-----
2 6 8
3 5 7
1 8 1
5 9 15
```
tambahkan value `k` pada array dari _range_ `a` sampai `b`:
```
index         ->   1  2  3  4  5  6  7  8  9 10
initial state -> [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
operasi ke-1  -> [ 0, 8, 8, 8, 8, 8, 0, 0, 0, 0 ]
operasi ke-2  -> [ 0, 8,15,15,15, 8, 0, 0, 0, 0 ]
operasi ke-3  -> [ 1, 9,16,16,16, 9, 1, 1, 0, 0 ]
operasi ke-4  -> [ 1, 9,16,16,31,24,16,16,15, 0 ]
```
maka value terbesar adalah `31` setelah semua operasi selesai

### Release 0
Buat fungsi yang menerima panjang array dan daftar operasi (berupa array multi dimensi) dan diproses untuk mendapatkan nilai maksimum pada array seperti contoh diatas!