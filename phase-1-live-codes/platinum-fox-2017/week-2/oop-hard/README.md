# **Perpustakaan Javascript (2 Jam)**


### RELEASE 0
Terdapat satu Perpustakaan yang memiliki nama 'Perpustakaan Javascript' dan beralamat di 'Pondok Indah' perpustakaan ini baru saja dibangung oleh saudagar kaya. perpustakaan saat ini baru memiliki 3 genre buku yaitu History, Journal dan Biography berikut property yang dimiliki setiap genre buku

1. Journal
  * **Title:** Judul dari buku
  * **Author:** Pengarang dari buku
  * **Total Page:** Jumlah halaman dari buku
  * **Reading Days:** Estimasi berapa hari pembaca dapat menyelesaikan buku tersebut dihitung dari jumlah halaman dibagi 100 dengan hasil pembulatan keatas menjadi estimasi berapa hari pembaca dapat menyelesaikan bacaan

2. Biography
  * **Title:** Judul dari buku
  * **Author:** Pengarang dari buku
  * **Total Page:** Jumlah halaman dari buku
  * **Reading Days:** Estimasi berapa hari pembaca dapat menyelesaikan buku tersebut dihitung dari jumlah halaman dibagi 100 dengan hasil pembulatan keatas menjadi estimasi berapa hari pembaca dapat menyelesaikan bacaan
  * **Figure:** Tokoh yang diceritakan dalam buku tersebut

3. History
  * **Title:** Judul dari buku
  * **Author:** Pengarang dari buku
  * **Total Page:** Jumlah halaman dari buku
  * **Reading Days:** Estimasi berapa hari pembaca dapat menyelesaikan buku tersebut dihitung dari jumlah halaman dibagi 100 dengan hasil pembulatan keatas menjadi estimasi berapa hari pembaca dapat menyelesaikan bacaan
  * **Century:** Masa Peradaban yang diceritakan dalam buku


untuk awal buka perpustakaan juga memiliki 3 buku yang siap untuk dibaca

1. Journal
  * **Title:** Jatuh Bangung Seorang Fullstack
  * **Author:** Kang Udin
  * **Total Page:** 89
2. Biography
  * **Title:** Orang Dibalik Apple
  * **Author:** Mas Bejo
  * **Total Page:** 327
  * **Figure:** Steve Wozniak
3. History
  * **Title:** Awal Peradaban Callback
  * **Author:** Bang Togar
  * **Total Page:** 127
  * **Figure:** Middle Earth

masukanlah 3 buku tersebut kedalam list buku perpustakaan

untuk jumlah halaman setiap tidak boleh langsung diberitahu ke pembaca apabila jumlah halaman lebih dari 200 maka beritahu pembaca 'Banyak halamannya capek ngitungnya' dan apabila buku dibawah 200 halaman beritahu saja halamannya

### Contoh Test Case
```javascript
console.log(biography.totalPages) // 'Banyak halamannya capek ngitungnya'
console.log(journal.totalPages) // 89
```

```javascript
console.log(perpustakaan.book)
```
output akan seperti ini:
```
[ Journal {
    title: 'Jatuh Bangung Seorang Fullstack',
    author: 'Kang Udin',
    _totalPages: 89,
    readingDays: 1,
    isAvail: true },
  Biography {
    title: 'Orang Dibalik Apple',
    author: 'Mas Bejo',
    _totalPages: 327,
    readingDays: 4,
    isAvail: true,
    figure: 'Steve Wozniak' },
  History {
    title: 'Awal Peradaban Callback',
    author: 'Bang Togar',
    _totalPages: 127,
    readingDays: 2,
    isAvail: true,
    century: 'Middle Earth' } ]
```

### RELEASE 1
untuk sekarang perpustakaan telah dibuka sekarang pembaca bisa mendaftar didalam perpustakaan
  - Tambahkan property pembaca didalam perpustakaan
  - buatlah class Readers untuk membuat object pembaca yang memiliki property nama, alamat, notelp.
  - Tambahkan property peminjam di dalam buku yang akan mencatat nama si peminjam didalam buku.
  - tambahkan property isAvail kedalam buku yang akan mencatat status buku tersebut sedang dipinjam atau tidak
  - buatlah sebuat method yang meng handle peminjaman buku. method ini akan melakukan validasi apakah buku tersebut dalam keadaan dipinjam atau tidak jika buku dalam keadaan dipinjam maka akan mereturn 'Buku dalam keadaan dipinjam' jika status buku boleh dipinjam maka dia akan menginput nama pembaca kedalam property peminjam dan status isAvail akan berubah.

  contoh test Case
  ```javascript
  xxxx.borrow([judulBuku], [namaPembaca]) // Buku Berhasil Dipinjam
  // atau
  xxxx.borrow([judulBuku], [namaPembaca]) // Buku Sudah Dipinjam
  ```

  ### RELEASE 2
  - Pisahkan masing-masih class menjadi 1 class 1 file
  - input data buku dan peminjam kedalam file json
