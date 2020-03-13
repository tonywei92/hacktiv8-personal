# LIVE-CODE-WEEK 4

> **estimasi waktu: ⏰  160 minutes**

Anda adalah programmer yang bekerja di sebuah startup peminjaman segala jenis barang, anda diminta untuk membuat aplikasi sederhana untuk menandai barang-barang yang sedang dipinjam dan mencatat log masing-masing peminjaman.

Gunakanlah arsitektur MVC dengan express + sequelize + EJS.


**Notes:**

- Desain tampilan tidak perlu sesuai, yang penting feature dioptimalkan sesuai dengan requirement yang diminta.
- Wajib menggunakan port **3000**
- Selain node_modules, config juga di .gitignore



------



### Release 0

Buatlah model `Item`:

- `name`: STRING
- `condition`: STRING
- `pricePerDay`: INTEGER
- `timeLimit` : DATE
- `rentedOn` : DATE

Buatlah model `Member`:

- `nik`: STRING
- `firstName`: STRING
- `lastName`: STRING
- `address`: DATE
- `phone` : STRING

Buatlah model `Log`:
- `itemId`: INTEGER
- `description`: STRING

> catatan: condition string "BAD"/"MEDIUM"/"GOOD"

### Release 1

`Member` dan `Item` memiliki hubungan one-to-many, 1 `Member` bisa menyewa banyak `Item`, 1 `Item` hanya disewa oleh 1 `Member`. Buatlah migrasi baru untuk menambahkan kolom baru dan memenuhi releasi `Member` dan `Item` dan buat assosiasinya.



### Release 3

Jika release sebelumnya sudah selesai, lakukan seeding untuk table `Items` dengan menggunakan data `items.csv`



------

***Routes yang perlu dibuat adalah sebagai berikut:***
| Method   | routes              | Notes                                          |
|----------|---------------------|------------------------------------------------|
| GET      | /                   | Halaman welcome                                |
| GET      | /members            | Tampilkan semua member                         |
| GET/POST | /members/add        | Tampilkan form untuk menambah member baru      |
| GET/POST | /members/:id/edit   | Tampilkan form untuk mengedit member sesuai id |
| GET      | /members/:id/delete | Melakukan operasi penghapusan member sesuai id |
| GET      | /items              | Tampilkan semua item                           |
| GET      | /items/:id          | Tampilkan informasi dari satu item             |
| GET/POST | /items/add          | Tampilkan form penambahan item                 |
| GET      | /items/:id/delete   | Lakukan operasi penghapusan item sesuai id     |
| GET/POST | /items/rent         | Tampilkan form untuk meminjam item             |
| GET/POST | /items/return       | Tampilkan form untuk mengembalikan item        |
------



### Release 4

Pada model `Member`, buatlah validasi semua field tidak boleh kosong, kecuali `address` boleh kosong dan NIK haruslah angka.

pada model `Item`, buatlah validasi semua field tidak boleh kosong dan pricenya haruslah angka.

### Release 5

Pada `/items`, tampilkan semua item dengan field `name`, `condition`, `rentprice/day` dan `rented`.
bila item sudah disewa maka `rented` berisi nama penyewa, tanggal peminjaman dan _link_ untuk mengembalikan (return) barang, apabila belum ada penyewa, maka tampilkan tulisan "available" dan _link_ sewa.

kolom `name` juga sebuah link untuk melihat log peminjaman/pengembalian item, log **tidak** perlu di-_sort_.

### Release 6

Buatlah helpers function untuk mendapatkan fullname dari firstName dan lastName

Pada halaman sewa, tampilkan nama item, biaya sewa/hari, dan buatlah form dengan pilihan member yang akan meminjam yang akan membuat relasi item dengan member serta isi rentedOn-nya dengan waktu sekarang.

pada halaman _return_ barang, tampilkan perhitungan jangka peminjaman dalam hari, dengan rumus tanggal hari ini dikurangi tanggal peminjaman. Tampilkan form dengan pilihan kondisi pengembalian `BAD`, `MEDIUM` atau `GOOD`, bila di-submit, maka rentedOn dan field relasi pada item dijadikan `null`.



### Release 7

Setiap kali meminjam atau mengembalikan barang, maka buatlah `hook` untuk mencatat lognya dengan format sbb:

`Barang dipinjam oleh Isro dalam kondisi GOOD`

dan 

`Barang dikembalikan oleh Isro dalam jangka 1 hari, total 10000 dalam kondisi BAD`

Manfaatkan _previousDataValues untuk mendapatkan nilai sebelum di-update.



### Release 8

Pada `delete` member, maka barang yang dipinjam akan di-_clear_ juga status peminjamannya sesuai dengan member terkait.

pada `delete` item, tampilkan error bila menghapus item yang statusnya sedang dipinjam dengan menggunakan `hook`.


### Release 9
Pada penambahan item, buatlah form untuk menginput nama, harga sewa/hari dan kondisinya dengan pilihan `BAD`, `MEDIUM` atau `GOOD`.

### Release 10

Tampilkan pesan _error_ ataupun _success_ pada setiap submit _form_.
