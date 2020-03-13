# Dear Diary 📖 ( 30 Menit )

## Summary

Membuat sebuah aplikasi menulis diary sesuai dengan jumlah hari pada bulan yang
kita masukkan untuk menulis diary.

## Release 0

Buatlah sebuah class Diary yang dapat memenuhi kebutuhan sebagai berikut

- Setiap diary memiliki nama bulan diary tersebut ditulis.
- Setiap diary memiliki jumlah hari yang dapat ditulis didalam diary tersebut.
- Setiap diary memiliki catatan per hari apa saja yang diceritakan oleh user di
  hari itu, dimana user dapat menulis lebih dari satu catatan pada hari yang
  sama.

Buatlah class-class yang dapat memenuhi kebutuhan diatas.

## Release 1

Buatlah sebuah class Factory untuk menghasilkan buku diary yang memiliki jumlah
hari yang dapat ditulis oleh user sesuai dengan jumlah tanggal pada bulan
tersebut.

**Contoh**:

**September** → 30 hari

**Februari** → 28 Hari

**Januari** → 31 Hari

```javascript
let septemberDiary = DiaryFactory.create('september')
// akan menghasilkan
//  DIARY {
//  month: 'september',
//  day: 30
//  diaries: [
//  { Day: {name: 1, note: [ ]}
//   ]
// }
//
```

## Release 2

Buatlah sebuah fungsi `write` yang akan menerima dua input `tanggal` dan note
yang akan ditulis oleh user. Pastikan `tanggal` yang diinput oleh user merupakan
tanggal yang valid pada bulan tersebut.

```javascript
septemberDiary.write(1, 'belajar sudoku')
// Berhasil menulis diary

septemberDiary.write(1, 'belajar boogle')
// Berhasil menulis diary

septemberDiary.write(31, 'belajar sudoku')
// Data yang dimasukkan tidak ada pada bulan september
```

## Release 3

Buatlah sebuah fungsi report untuk menampilkan seluruh catatan yang sudah
ditulis oleh user selamat 1 bulan. Diperbolehkan menggunakan `console.table`
atau `console.log`

```javascript
septemberDiary.report()
//	'Day 1' => belajar sudoku, belajar boogle'
//	'Day 2' => no data
//    .......
//	'Day 30' => no data
//
```
