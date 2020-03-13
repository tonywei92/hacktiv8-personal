# LIVE-CODE-WEEK 4

> **estimasi waktu: ⏰  160 minutes**

Pada momen bulan ramadhan seperti sekarang ini biasanya banyak sekali ajakan untuk mengadakan buka bersama dari berbagai group, baik group keluarga, teman, atau kantor.

Kali ini kita akan membuat aplikasi untuk membuat perencanaan buka bersama dengan menggunakan express + sequelize



**Notes:**

- Desain tampilan tidak perlu sesuai, yang penting feature dioptimalkan sesuai dengan requirement yang diminta.
- Wajib menggunakan port **3000**
- Selain node_modules, config juga di .gitignore



------



### Release 0

Buatlah model `Restaurant`:

- `name`: STRING
- `description`: STRING
- `location`: STRING

Buatlah model `Schedule`:

- `title`: STRING
- `description`: STRING
- `date`: DATE
- `free`: BOOLEAN
- `maxParticipants`: INTEGER
- `participants`: INTEGER



### Release 1

Relasi antar 2 model tersebut adalah one-to-many. Pada satu `Restaurant` bisa terdapat banyak `Schedule`. Buatlah hubungan antara keduanya dan tambahkan migrasi baru untuk melengkapi hubungan keduanya.



### Release 2

Buatlah migrasi baru untuk mengubah nama column `free` menjadi `isFree` pada model `Schedule`



### Release 3

Lakukan seeding untuk table `Restaurants` dengan menggunakan data `restaurantSeeds.json`.



------

***Routes yang perlu dibuat adalah sebagai berikut:***

| method | routes                        | detail                                                       |
| ------ | ----------------------------- | ------------------------------------------------------------ |
| GET    | /                             | Homepage                                                     |
| GET    | /restaurants                  | List `Restaurant` yang tersedia                              |
| GET    | /restaurants/:restaurantId    | Halaman  `Restaurant` beserta form untuk membuat ` Schedule` baru pada `Restaurant` tersebut. |
| POST   | /schedules/add/:restaurantId  | Membuat `Schedule` baru                                      |
| GET    | /schedules                    | List `Schedule` yang sudah ada                               |
| GET    | /schedules/:scheduleId        | Halaman detail `Schedule` beserta form untuk melakukan perubahan data. |
| POST   | /schedules/edit/:scheduleId   | Memodifikasi `Schedule` yang sudah dibuat                    |
| GET    | /schedules/attend/:scheduleId | Menambah jumlah participant di `Schedule`                    |
| GET    | /schedules/cancel/:scheduleId | Membatalkan `Schedule`                                       |

------



### Release 4

Tampilkanlah daftar restaurant yang tersedia pada routing  `GET /restaurants`



### Release 5

Pada routing `GET /restaurants/:restaurantId` tampilkanlah info restaurant sesuai dengan id-nya.

Lalu buat juga form untuk membuat `Schedule` pada restaurant tersebut.

Kolom-kolom input harus sesuai dengan contoh!!!



### Release 6

Routing `POST /schedules/add/:restaurantId` akan membuat `Schedule` baru pada  `Restaurant` dengan id sesuai dengan params.

Jumlah `participant` secara default akan bernilai `0` saat `Schedule` pertama kali dibuat.

Buatlah validasi-validasi berikut ini pada model `Schedule`:

- `Schedule` hanya bisa dibuat untuk `date` besok hari atau setelahnya. Message yang harus ditampilkan adalah: **You can only create an event for tomorrow or later**.
- Minimum `maxParticipants` adalah 3. Message yang harus ditampilkan adalah: **Maximum participants should be greater or equal to three**.



### Release 7

Pada routing `GET /schedules` tampilkanlah daftar `Schedule` yang telah ada.



### Release 8

Pada model `Schedule` buatlah instance method `getAvailableSeat` untuk memperoleh sisa jumlah partisipan yang masih bisa mengikuti event. Diperoleh dari `maxParticipants` dikurangi `participants`.

Routing  `GET /schedules/:scheduleId` akan menampilkan detail dari `Schedule` sesuai dengan id pada params.

Buat juga form untuk memodifikasi `Schedule`  tersebut.

Kolom-kolom input harus sesuai dengan contoh!!!



### Release 9

Routing `POST /schedules/edit/:scheduleId` akan menerima perubahan data `Schedule` dengan id sesuai dengan params

Tambahkan validasi-validasi berikut pada model `Schedule`

- `Schedule` yang sebelumnya sudah dinyatakan free tidak bisa dirubah menjadi unfree. Message yang harus ditampilkan adalah: **You must keep your promise to treat everyone**.
- `maxParticipants` tidak bisa diubah valuenya menjadi lebih rendah dari jumlah `participants` yang sudah konfirmasi hadir. Message yang harus ditampilkan adalah: **Maximum participant can't be set less than number of already confirming participants**.



### Release 10

Routing `GET /schedules/attend/:scheduleId` akan menerima konfirmasi kehadiran peserta dan akan menambah jumlah `participants`.

Tambahkan validasi berikut pada model `Schedule`:

- Jumlah `participants` tidak bisa melebihi `maxParticipants`. Message yang harus ditampilkan adalah: **Sorry, maximum participants already reached**.



### Release 11

Routing `GET /schedules/cancel/:scheduleId` akan menerima perintah pembatalan dari `Schedule` sehingga `Schedule` akan dihapus dari database.

Gunakan **hooks** pada model `Schedule` untuk menghandle hal berikut:

- Jika sudah ada peserta yang konfirmasi hadir (participants > 0), maka `Schedule` tidak bisa dibatalkan. Message yang harus ditampilkan adalah: **Sorry, you can't cancel this event, ${numberOfParticipants} people already confirmed to come**.



### Release 12

Buatlah helpers berikut:

- helper untuk memformat tanggal menjadi seperti **23 Mei 2019**.
- helper untuk memberi warna background hijau (**#8AE8A0**) khusus untuk `Schedule` yang free



### Release 13

Tambahkan 2 button pada routing `/schedules` yang berfungsi untuk memfilter schedule yang ditampilkan:

- button `Show All` akan menampilkan semua `Schedule`
- button `Show Free Only` akan menampilkan hanya `Schedule` yang free.

