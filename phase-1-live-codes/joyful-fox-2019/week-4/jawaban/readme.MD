# Harvest Moon

> **estimasi waktu: ⏰ menit**

Harvest moon merupakan sebuat game dimana pemain bertindak sebagai petani yang memiliki kebun serta bisa menanam kebunnya.

Pada live code ini kita akan membuat simulasi sederhana dari game Harvest Moon tersebut.

**Notes**

- Desain tampilan tidak perlu sesuai, yang penting feature dioptimalkan sesuai dengan requirement yang diminta.
- Sangat dianjurkan untuk menggunakan port 3000
- Tambahkan node_modules dan config di .gitignore

---

## Demo Aplikasi
[Link Demo](https://harvest-moon-back-to-hacktiv8.herokuapp.com/farms)


---

## Release 0

Buatlah model dan migration `Farm` dengan field sebagai berikut:

| Field        | Type    | Description                                        |
| ------------ | ------- | -------------------------------------------------- |
| farmName     | String  | Nama dari kebun                                    |
| playerName   | String  | Nama dari player                                   |
| birthDayDate | Date    | Tanggal lahir dari player                          |
| money        | Integer | Jumlah uang yang dimiliki player                   |

Buatlah model dan migration `Plant` dengan field sebagai berikut:

| Field         | Type     | Description                                                 |
| ------------- | -------- | ----------------------------------------------------------- |
| name          | String   | Nama dari tanaman                                           |
| price         | Integer  | Harga dari tanaman                                          |
| timeToHarvest | Integer  | Waktu yang dibutuhkan agar tanaman bisa dipanen             |
| dayPlayed     | Integer  | Jumlah hari telah dimainkan                                 |

---

## Release 1

`Farm` dan `Plant` memiliki hubungan one-to-many dimana 1 `Farm` bisa memiliki banyak `Plant` tetapi 1 `Plant` hanya bisa berada pada 1 `Farm`. Buatlah migrasi baru untuk menambahkan kolom baru untuk memenuhi relasi `Farm` dan `Plant` dan buat assosiasinya.

---

## Release 2

Ternyata ada kesalahan kolom `dayPlayed` seharusnya berada pada tabel `Farms` bukan di tabel `Plants`. Buatlah migrasi untuk menghilangkan kolom tersebut pada tabel `Plants` dan menambahkan kolom tersebut pada tabel `Farms` 

---

## Release 3

Lakukan seeding untuk mengisi data pada tabel yang sudah kita buat. Gunakan file `seed-fram.csv` untuk melakukan seeding untuk tabel `Farms`.

---

## Release 4

Buatlah fitur **CRUD** untuk `Farms` dan `Plants` sesuai dengan yang dibutuhkan. Format routing **HARUS SAMA PERSIS** dengan ketentuan sebagai berikut:

| Method | Routes                       | Description                                                                                        |
| ------ | ---------------------------- | -------------------------------------------------------------------------------------------------- |
| GET    | /farms                       | Menampilkan seluruh `Farms` yang ada                                                               |
| GET    | /farms/:farmId               | Menampilkan detail dari `Farm` dan menampilan form untuk menanam `Plant` baru pada `Farm` tersebut |
| POST   | /farms/:farmId               | Menanam `Plant` baru pada `Farm` tersebut                                                          |
| GET    | /farms/:farmId/sleep         | Menambah satu hari pada `Farm` tersebut                                                            |
| GET    | /plants/:farmId/:plantId/harvest     | Melakukan harvest pada `Plant` tersebut                                                            |

---

## Release 5

Buatlah sebuah tampilan pada route `/farms` yang akan menampilkan seluruh `Farms` yang tersedia diurutkan berdasarkan `id` dari `Plant` tersebut.

Buat juga sebuah getter mehod `fullDayPlayed` yang berfungsi mengembalikkan value `<dayPlayed> days`

Data yang harus ditampilkan pada route ini adalah:

| Field        | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| id           | id dari `Farm` tersebut                                      |
| farmName     | Nama dari `Farm` tersbut                                     |
| playerName   | Nama dari player `Farm` tersebut                             |
| birthDayDate | Tanggal lahir dari player `Farm` tersebut                    |
| money        | Jumlah uang yang dimiliki player `Farm` tersebut             |
| dayPlayed    | Jumlah hari telah dimainkan `Farm` (gunakan getter method) |

Untuk setiap `Farm` berikan sebuah button `Look at Farm` yang dapat digunakan untuk melihat detail dari `Farm` tersebut.

---

## Release 6

Buatlah sebuah tampilan pada route `/farms/:farmId` yang akan menampilkan semua `Plant` yang berada pada `Farm` tersebut dan diurutkan berdasarkan `timeToHarvest` dari `Plant` tersebut.

Data `Plant` yang harus ditampilkan adalah:

| Field           | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| Id              | Id dari `Plant` tersebut                                            |
| Name            | Nama dari `Plant` tersebut                                          |
| Time To Harvest | timeToHarvest dari `Plant` tersebut                                 |
| Action         | Button `harvest`                                                    |

## Release 7

Pada route `/farms/:farmId`, buat juga sebuah form untuk menambahkan `Plant` ke `Farm` tersebut. Data yang harus diinputkan adalah:
- Plant Name: Nama dari tanaman
- Price: Harga dari tanaman
- Time To Harvest: Sisa waktu tanaman akan dipanen

Serta terdapat beberapa validasi yang dapat dihandle, yaitu:
- plantName tidak boleh kosong
- price minimum 1000
- timeToHarvest minimum 0

Pada validasi release ini, bila ada error setidaknya lampirkan res.send dari error messagenya saja dan datanya tidak boleh masuk ke database.

## Release 8

Pada route `/farms/:farmId`, buatlah button `harvest` bisa di klik, dan apabila di klik maka akan mengakses route `/plants/:farmId/:plantId/harvest`.

Apabila tombol tersebut di klik, maka `Plant` tersebut akan di delete dari database.

## Release 9

Pada route `/farms/:farmId`, buatlah sebuah header `Diary Book - Days <farm.dayPlayed>` yang terdapat button yang berisikan button `Sleep` yang bila di klik maka akan mengakses route `/farms/:farmId/sleep`.

Kemudian buatlah sebuat class method yang bernama `nextDay` pada tabel `Farms` yang menerima sebuah parameter `farmId` dan gunakan function ini untuk menambahkan `dayPlayed` dari farm tersebut sebanyak 1.

## Release 10

Pada route `/farms/:farmId`, buatlah juga sebuah helpers untuk mengubah tampilan pada field `Time To Harvest` menjadi `<timeToHarvest> day left` apabila nilainya lebih dari 0 atau `time to harvest` apabila nilainya 0. Hingga release ini, `Harvest` masih bisa berjalan walaupun belum waktunya panen.

## Release 11

Buatlah hooks untuk menambahkan `money` pada tabel `Farms` apabila tanaman tersebut telah di `harvest`. Serta hanya munculkan tombol `Harvest` apabila nilai dari `timeToHarvest` bernilai 0 dan bila nilainya bukan 0 maka tampilkan `Waiting...`.

## Release 12

Pada saat `sleep` dipencet pada route `/farms/:farmId`, buatlah agar class method `nextDay` pada tabel `Farms` mengurangi seluruh nilai `timeToHarvest` sebanyak 1 pada setiap `Plant` di Farm tersebut yang nilainya bukan 0 (Optional: gunakan Promise.all dan <instance>.save()).
