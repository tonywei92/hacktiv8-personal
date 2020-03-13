# REMOVIE APP

**REMOVIEW** adalah sebuah aplikasi untuk melihat dan menuliskan review pada film-film menggunakan **Express** dan **Sequelize**

Fokus pada fitur terlebih dahulu tampilan tidak harus sama seperti yang ditampilkan di demo.

Lakukan pengerjaan fitur sesuai dengan release yang diperintahkan oleh soal.

## Release 0

Install dependencies seperti: express, sequelize, dll. Inisialisasi project kalian menggunakan command yang disediakan oleh sequelize. Isi konfigurasi database, database **HARUS** diberi nama **young_live_code_week_4**.

## Release 1
  Buatlah semua migration dengan spesifikasi sebagai berikut:

- Movies
  - id ( integer )
  - title ( string )
  - synopsis ( string )
  - duration ( integer )
  - createdAt ( date )
  - updatedAt ( date )
- Reviews
  - id ( integer )
  - description ( string )
  - peringkat ( string )
  - createdAt ( date )
  - updatedAt ( date )

Relasi untuk kedua table ini adalah satu `Movie` dapat memiliki banyak `Review`, dan satu `Review` hanya boleh dibuat pada satu `Movie`.

Kamu boleh menambahkan kolom baru untuk memenuhi relasi tersebut dan pikirkan table dan kolom apa yang harus ditambahkan, selain itu **HARUS** mengikuti requirement di atas.

## Relase 2

Buatlah dua migrations baru yang bertujuan:
- menambahkan kolom `rating` dengan tipe `integer` pada tabel `Movies` dengan nilai default = 0
- mengubah nama pada kolom `peringkat` pada tabel `Reviews` menjadi `bintang` dengan tipe `integer`.

## Release 3

Buatlah seeders untuk mengisi data-data `Movie`. Initial data sudah tersedia dalam bentuk JSON, silahkan gunakan data tersebut (boleh menggunakan readfFleSync). *createdAt tersedia dalam file JSON*


## FEATURE
Removie memiliki fitur **CRD** dengan summary sebagai berikut:

| METHOD | ROUTE                          | DESCRIPTION                                                                              |
| ------ | ------------------------------ | ---------------------------------------------------------------------------------------- |
| GET    | `/` | Tampilkan homepage: Removie App |
| GET    | `/movies` | Tampilkan semua data `Movies` sesuai dengan release 4 |
| GET    | `/movies/:movieId` | Saat movie name pada tabel di klik maka akan menampilkan detail data movie dan semua `Reviews` yang dimiliki oleh movie tersebut |
| POST   | `/reviews/:movieId`  | Membuat `Review` baru pada sebuah movie |
| POST   | `/review/delete/:reviewId`  | menghapus `Review` yang ada pada sebuah movie   

ps: format routes **Harus Sama Persis**

## Release 4

Buatlah routing ke halaman `/movies` yang akan menampilkan semua data movie yang sudah kamu buat pada release 3.

Data yang kamu harus tampilan adalah:
- No
- Title
- Duration
- Rating
- Released Data (diambil dari data createdAt)

## Release 5

Buatlah (instance/ class / helpers) method
- Rating pada `/movies` adalah hasil dari rata-rata semua bintang yang ada di review movie tersebut. gunakan method yang tepat apakah instance atau class
- Duration pada `/movies` memiliki format `99h99min`, gunakan cara yang tepat untuk merubah format tampilan ini

## Release 6

Buatlah routing ke halaman `/movies/:movieId` yang akan menampilkan semua data reviews pada movie tersebut, dan terdapat **FORM** untuk melakukan input review pada movie tersebut. **Routing harus sama dengan requirement**

Data yang kamu harus tampilan adalah:
- description
- summary

## Release 7

Saat melakukan Read `/movies/:movieId`, summary merupakan hasil kesimpulan bintang dengan kententuan sbb:
  - jika bintang 1, maka Very Bad
  - jika bintang 2, maka Bad
  - jika bintang 3, maka Good
  - jika bintang 4, maka Very Good
  - jika bintang 5, maka Excellent

## Release 8

Saat melakukan Create `/reviews/:movieId` 
  - jika review diisi kosong: tampilkan error **description cannot be empty**
  - jika bintang diisi kurang dari 1: tampilkan error **Minimum rating input is 1**
  - jika bintang diisi lebih dari 5: tampilkan error **Maximum rating input is 5**
  - jika berhasil melakukan review, berikan informasi **success create review**
  - pastikan rating pada `movies` juga terupdate, gunakan **HOOK**

## Release 9

Saat melakukan Delete `/review/delete/:reviewId`
  - saat melakukan delete, berikan informasi **success delete review with description: [description]**
  - pastikan rating pada `movies` juga terupdate, gunakan **HOOK**

## Release 10

Buatlah sebuah feature **SEARCH** yang dinamis sesuai dengan input yang ingin diberikan
- Title: akan memberikan list movie *yang memiliki text* sesuai dengan input search yang diberikan
- Rating: akan memberikan movie dengan rating sesuai dengan input
- Year: akan memberikan list movie dengan tahun yang diinput hingga yang terbaru