# Flight Schedule

Flight Schedule adalah sebuah aplikasi menggunakan **Express** dan **Sequelize**
untuk membuat dan melihat jadwal penerbangan yang tersedia. Baca setiap specification dengan baik.

Fokus pada fitur terlebih dahulu tampilan tidak harus sama seperti yang ditampilkan di demo.

Lakukan pengerjaan fitur sesuai dengan release yang diperintahkan oleh soal.

## Release 0

Install dependencies seperti: express, sequelize, dll. Inisialisasi project kalian menggunakan command yang disediakan oleh sequelize. Isi konfigurasi database, database HARUS diberi nama **bold_live_code_week_4**.

## Release 1

Buatlah semua migration dengan spesifikasi sebagai berikut:

- Airport
  - name (string)
  - country ( string )

- FlightSchedule
  - boardingTime (date)
  - flightNumber (string)
  - businessClassCost (float)
  - firstClassCost (float)
  - economyClassCost (float)
  - airplane (string)

- Airplane
  - type (string)
  - price (integer)
  
Relasi untuk table ini adalah satu `Airport` dapat membuat banyak `FlightSchedule`, dan satu `FlightSchedule` hanya boleh dibuat pada satu `Airport`. Kamu boleh menambahkan kolom baru untuk memenuhi relasi tersebut, selain itu **HARUS** mengikuti requirement di atas.

## Relase 2

Buatlah migrations baru untuk mengubah nama kolom `price` menjadi `cost` dan mengubah tipe datanya menjadi `float`

## Release 3

Buatlah seeders untuk mengisi data-data `Airports` setidaknya 3 data.
Buatlah seeders untuk mengisi data-data `Airplane` dengan data sebagai berikut:
```
  1. type: N219, cost: 1350
  2. type: CN235, cost: 650
  3. type: N250, cost: 1100
  4. type: N212, cost: 800
```
## Release 4

Buatlah routing ke halaman `/airports` yang akan menampilkan data - data airports yang sudah kamu buat pada release 3. **Routing harus sama dengan requirement**

Data yang kamu harus tampilan adalah:
- name
- country


## Release 5

Buatlah sebuah fitur **CRU** untuk `FlightSchedule`. Format **Harus Sama Persis** dengan ketentuan sebagai berikut:

| METHOD | ROUTE                          | DESCRIPTION                                                                              |
| ------ | ------------------------------ | ---------------------------------------------------------------------------------------- |
| GET    | `/airports/:airportId` | Menampilkan detail data airport dan semua `FlightSchedule` yang dimiliki oleh airport tersebut |
| POST   | `/flightSchedules/:airportId`  | Membuat `FlightSchedule` baru pada sebuah airport                                                  |
| GET   | `/flightSchedules/:scheduleId`       | Mendapatkan detail `FlightSchedule` pada sebuah airport                                                       |
| POST   | `/flightSchedules/:scheduleId/update`   | Mengupdate jadwal dan pesawat yang dipakai pada `FlightSchedule`                                       |

## Release 6

Buatlah sebuah tampilan untuk menampilkan Detail dari sebuah Airport dengan syarat sebagai berikut:

- Nama airport.
- Country airport.
- Sebuah Form untuk menambahkan jadwal baru. Dimana form tersebut berisi
  - boarding time 
  - airplanes (list pesawat diambil dari database `Airplanes`)
- List semua schedule yang terdapat pada airport tersebut dengan format sebagai berikut
  - no
  - flightNumber
  - boardingTime
  - businessClassCost
  - firstClassCost
  - economyClassCost
  - airplane
  - action to detail

## Release 7

Buatlah pada routing POST `/flightSchedule/:airportId`, validation pada form ketika menambahkan jadwal baru 
- jadwal yang diinput waktunya tidak boleh lewat dari tanggal dan waktu saat ini
- validasi apakah pesawat yang diinput ada didalam database atau tidak
- Asumsi satu pesawat hanya bisa melakukan satu penerbangan dihari yang sama jadi buatlah validasi apabila pesawat tersebut sudah memiliki jadwal lain dihari tersebut. Custom message yang ditampilkan pada validasi ini adalah `THERE IS ANOTHER SCHEDULE FOR <airplaneType> AT <Day year-month-date>`


**Rules**
- Gunakan **Hooks** untuk membuat properti dengan ketentuan sebagai berikut:
  - economyClassCost = airplane cost * 175%
  - firstClassCost = airplane cost * 225%
  - businessClassCost = airplane cost * 300%
  - flightNumber = <3 huruf pertama dari type pesawat>-< random 3 digit angka>-< tanggal boardingTime>
- Pikirkan untuk mendapatkan properti tersebut apakah bisa menggunakan `instance method`, `class method`, atau `helpers`

## Release 8

Buatlah pada routing GET `/flightSchedules/:scheduleId`. yang akan menampilkan detail jadwal penerbangan dan bisa diupdate

**Rules**
- Data yang ditampilkan adalah
  - flightNumber
  - boardingTime (sudah terpopulate saat di views)
  - airplanes (sudah terpopulate saat di views)

Buatlah pada routing POST `/flightSchedules/:scheduleId/update`, yang akan mengupdate data jadwal penerbangan

## Release 9


Formatlah semua uang yang ditampilkan pada aplikasi ini menjadi format uang **USD** dan format boarding time menjadi `<day> <year>-<month>-<date>`.

Coba kamu pikirikan best practice-nya fungsi ini akan disimpan di dalam Model sebagai class method atau instance method / Helper?

## Release 10

Tambahkan Background color pada masing-masing column cost 
Dimana rulesnya adalah: 

- **Merah  -> kurang dari 0 ( minus ) -> kode hex (#d9534f)**
- **Kuning -> antara 0 sampai 499000 -> kode hex (#ffbb33)**
- **Hijau  -> Lebih sama dengan 500000 -> kode hex(#00C851)**


## Release 11

Buatlah fitur sort pada halaman `/airports/:airportId`. Buatlah kolom `boardingTime`, `businessClassCost`, `firstClassCost` dan `economyClassCost` pada tampilan semua schedules menjadi sebuah link yang dapat di klik.

Ketika header kolom di-klik, maka akan disorting sesuai dengan kebalikannya. Default awal adalah ASCENDING, ketika di-klik sorting FlightSchedules akan terurut secara ASC / DESC by `boardingTime`, `businessClassCost`, `firstClassCost` dan `economyClassCost`.

HINT: Untuk mendapatkan parameter setelah tanda "?" pada url, gunakan `req.query`.

Berikut adalah link demo untuk membantu kalian mengerjakan tugas ini
[Link Demo](https://boldfox.herokuapp.com)