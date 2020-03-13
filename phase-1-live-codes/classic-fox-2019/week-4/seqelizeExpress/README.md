# Harvest Moon

**estimasi waktu: ⏰ 150 menit**

Kali ini kita akan membuat aplikasi untuk menghitung pengeluaran dan pemasukan kita sebagai petani di Hacktiv8 Farm!

**Tampilan tidak perlu sesuai, yang penting feature dan tampilan di optimalkan**

Wajib menggunakan nama database: livecodeW4 dan Port: 3000


## Release 0
Buatlah Model dengan data sbb:
- Vegetable:
  - name: text,
  - income: number,
  - outcome: number
  - waterPoin: integer,
  - waterToCrops: integer
- Season:
  - name: text,
  - buy: number,
  - sell: number,
  
**Pastikan nama column sama dengan soal!**
lakukan migrasi!

## Release 1
Vegetable dan Season memiliki hubungan one To many, 1 Season punya banyak Vegetable, 1 Vegetable hanya dimiliki 1 Season. Buatlah migrasi baru untuk menambahkan kolom baru dan memenuhi releasi `Vegetable` dan `Season` dan buat assosiasinya.

## Release 2
Buatlah migrasi baru untuk memindahkan column buy dan column sell pada `Season` ke `Vegetable`, serta column income dan outcome pada `Vegetable` ke `Season`

Lakukan migrasi terlebih dahulu!
Jika sudah, lakukan proses seeding dari data yang disediakan.

<hr>

**untuk release 3-8, Perhatikan routes di bawah ini, penamaan routes wajib mengikuti requirement**

| Method | Route                          | What                                        |
| ------ | ------------------------------ | ------------------------------------------- |
| GET    | /vegetables                    | untuk mendapatkan semua data vegetable      |
| POST   | /vegetables                    | untuk menambahkan vegetable baru            |
| GET    | /vegetables/:id/buy/:idSeason  | untuk melakukan pembelian vegetable         |
| GET    | /vegetables/:id/water/         | untuk melakukan penyiraman vegetable        |
| GET    | /vegetables/:id/sell/:idSeason | untuk melakukan penjualan vegetable         |
| GET    | /transactions                  | untuk melihat semua data dari semua season  |
| GET    | /transactions/:id/detail       | untuk melihat semua vegetable di season itu |

## Release 3
`/vegetables` : tampilkan vegetable dengan format sesuai dengan yang dicontohkan.

`Status` adalah persentase perbandingan WP (Water Poin) / (WaterToCrops) WTC

Coba pikirkan, untuk membuat `Status` apakah menggunakan instance method, class method, helpers atau tidak perlu sama sekali?

## Release 4
`/vegetables` : buatlah form untuk menambahkan sayuran baru, detail sayuran baru sebagai berikut:
- name: bebas
- Season: `Sesuai dengan season yang ada`
- buy: `range nilai 1 - 1000`
- sell: `range nilai 1 - 1000 & harus lebih mahal dari buy`
- waterToCrops: `minimum 10`

## Release 5
Buatlah validasi yang sesuai untuk mengisi Vegetable baru! jika tidak sesuai, tampilkan error sbb:
- buy & sell
  jika nilai < 0: "Minimum must 0"
  jika nilai > 1000: "Maximum input is 1000"
- sell: "Sell must greater than buy"
- waterToCrops: "Minimum WTC is 10"
- Season: "Season not exists"

Jika kita perhatikan form input, tidak ada data waterPoin. Buatlah default value untuk waterPoin dengan nilai 0

**Untuk release 6 - 8, Gunakan hooks, baca dokumentasi hooks dengan baik dimana parameter yang diterima hooks, ada 2!**

## Release 6
`vegetables/:id/buy/:idSeason`: ketika status 0%, option akan menampilkan `buy`, lakukan pembelian vegetables sesuai dengan harga buy sayuran. 

Saat melakukan proses ini, outcome pada season vegetable tersebut akan bertambah secara otomatis.

## Release 7
`vegetables/:id/watering`: ketika status diantara 0% dan 99% maka option akan menampilkan `watering`, lakukan proses penambahan waterPoin pada sayuran tersebut.

## Release 8
`vegetables/:id/sell/:idSeason`: ketika status 100%, option akan menampilkan `sell`, lakukan penjualan vegetables sesuai dengan harga sell sayuran. 

Saat melakukan proses ini, income pada season vegetable tersebut akan bertambah secara otomatis.

## Release 9
`/transactions`: tampilkan semua detail data season sesuai dengan tampilan. income dan outcome adalah akumulasi nilai keuntungan dari masing-masing season. total adalah jumlah vegetable yang tersisa di season itu.

`/transactions/:id/detail`: tampilkan semua vegetable apa saja yang ada di season itu

## Release 10
Buatlah helpers untuk merubah number pada column No menjadi romawi.
