# Dear Diary 📖 ( 30 Menit )

## Summary

Membuat sebuah aplikasi menulis diary sesuai dengan jumlah hari pada bulan yang
kita masukkan untuk menulis diary.

## Release 0

Buatlah sebuah class `Diary` dengan properti:
- month -> Nama bulan diary tersebut dibuat
- totalDays -> Jumlah hari di bulan tersebut
- diaries -> Kumpulan dari `Note` yang dibuat

Buatlah juga sebuah class `Note` dengan properti:
- note -> Tulisan yang ditulis oleh user dalam diary
- day -> Hari note tersebut dibuat (berupa angka)

## Release 1

Buatlah sebuah class `DiaryFactory` yang memiliki method `create`. Fungsi ini dapat menghasilkan buku diary dengan jumlah hari yang dapat ditulis oleh user sesuai dengan jumlah hari pada bulan tersebut. Jumlah hari yang dapat ditulis direpresentasikan dengan properti `totalDays` pada class `Diary`. Kalian dapat membuat kamus untuk `totalDays` berdasarkan data dibawah ini:

**Data jumlah hari setiap bulan**

| Nama Bulan | Total Hari |
| ---------- | ---------- |
| januari    | 31         |
| februari   | 28         |
| maret      | 31         |
| april      | 30         |
| mei        | 31         |
| juni       | 30         |
| juli       | 31         |
| agustus    | 31         |
| september  | 30         |
| oktober    | 31         |
| november   | 30         |
| desember   | 31         |


```javascript
let octoberDiary = DiaryFactory.create('oktober')
console.log(octoberDiary)
// OUTPUT

//  DIARY {
//  month: 'oktober',
//  totalDays: 31
//  diaries: [ ]
// }
//

```

## Release 2

Buatlah sebuah fungsi `write` yang akan menerima dua input, yaitu `hari` dan `note`
yang akan ditulis oleh user. Pastikan `hari` yang diinput oleh user merupakan hari yang valid pada bulan tersebut. Setiap user dapat menginput lebih dari satu `note` di hari yang sama

```javascript
octoberDiary.write(1, 'belajar sudoku')
// Berhasil menulis diary di hari 1

octoberDiary.write(1, 'belajar boogle')
// Berhasil menulis diary di hari 1

octoberDiary.write(2, 'belajar mango tree')
// Berhasil menulis diary di hari 2

octoberDiary.write(32, 'belajar sudoku')
// Hari yang dimasukkan tidak ada pada bulan october

console.log(octoberDiary.diaries)
/*
* [ Note { note: 'belajar sudoku', day: 1}, Note { note: 'belajar boogle', day: 1}, Note { note: 'belajar mango tree', day: 2}]
*/

```

## Release 3

Buatlah sebuah `getter` dengan nama `report` pada class `Note` yang digunakan untuk menambahkan kalimat `Dear diary hari ini aku` di depan `note` yang sudah dituliskan.

```javascript
  const firstNote = octoberDiary.diaries[0]

  console.log(firstNote.report) // 'Dear diary hari ini aku belajar sudoku'
  
  const secondNote = octoberDiary.diaries[1]

  console.log(secondNote.report) // 'Dear diary hari ini aku belajar boogle'
```

## Release 4

Buatlah sebuah fungsi `report` pada class `Diary` yang dapat menampilkan seluruh `Note` yang ditulis oleh user pada hari yang diinginkan oleh user tersebut. Pastikan juga mengembalikan kata kata `Tidak ada note hari ini` ketika user meminta report di hari yang tidak ada `Note` yang dibuat, dan mengembalikan kata `Hari tidak valid` ketika user meminta report di hari yang tidak ada pada bulan tersebut.
Setiap `Note` yang ditampilkan harus dimulai dengan kata  `Dear diary hari ini aku`. 

```javascript
const report = octoberDiary.report(1) 

console.log(report)

/** 
 * Day 1
 * Dear diary hari ini aku belajar sudoku
 * Dear diary hari ini aku belajar boogle
 * 
*/

const report2 = octoberDiary.report(2) 

console.log(report2)

/** 
 * Day 2
 * Dear diary hari ini aku belajar mango tree
 * 
*/

const report3 = octoberDiary.report(3) 

console.log(report3)
//	Tidak ada note di hari ini

const report4 = octoberDiary.report(32) 

console.log(report4)
// Hari yang dimasukkan tidak ada pada bulan october

```
