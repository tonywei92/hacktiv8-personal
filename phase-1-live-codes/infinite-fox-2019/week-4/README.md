# PERTAMINI

> **estimasi waktu: ⏰ 165 minutes**

Bensin merupakan komponen penting pada setiap kendaraan yang kita gunakan setiap harinya.

Pada hari ini kita akan coba membuat sebuah aplikasi simulasi pembelian bensin seperti yang sering kita lakukan setiap harinya.

[Link Demo](https://pertamini-infinite.herokuapp.com/gasolines)

**Notes**

- Desain tampilan tidak perlu sesuai, yang penting feature dioptimalkan sesuai dengan requirement yang diminta.
- Wajib menggunakan port **3000**

---

## Release 0

Buatlah model dan migration `Gasoline` dengan field field sebagai berikut:

| Field | Type    | Description                                       |
| ----- | ------- | ------------------------------------------------- |
| name  | String  | Nama dari bensin                                  |
| price | Integer | Harga satuan dari bensin tersebut                 |
| quota | String  | Jumlah bensin yang tersedia untuk bensin tersebut |

Buatlah model dan migration `Vehicle` dengan field field sebagai berikut:

| Field   | Type    | Description                                                        |
| ------- | ------- | ------------------------------------------------------------------ |
| name    | String  | Nama dari Kendaraaan                                               |
| maxFuel | Integer | Jumlah maksimum bensin yang bisa ditampung oleh kendaraan tersebut |
| fuel    | Integer | Jumlah bensin yang terisi pada kendaraan tersebut                  |

## Release 1

`Gasoline` dan `Vehicle` memiliki hubungan one-to-many dimana 1 `Gasoline` dapat digunakan pada banyak `Vehicle` tetapi 1 `Vehicle` hanya bisa menggunakan 1 `Gasoline`. Buatlah migrasi baru untuk menambahkan kolom baru dan memenuhi releasi `Gasoline` dan `Vehicle` dan buat assosiasinya.

## Release 2

Ada kesalahan pada requirement awal. field `quota` pada model `Gasoline` seharusnya memiliki tipe data `Integer`, buatlah sebuah migrasi untuk memperbaiki kesalahan tersebut.

## Release 3

Lakukan lah seeding untuk mengisi data pada table yang sudah kita buat

- Gunakan file `gasoline.json` untuk melakukan seeding untuk table `Gasolines`
- Gunakan file `vehicle.json` untuk melakukan seeding untuk table `Vehicles`

---

**Informasi routes yang perlu dibuat untuk aplikasi ini adalah:**

| Method | Routes                       | Description                                                                                                                    |
| ------ | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| GET    | /gasolines                   | Menampilkan semua jenis `Gasoline` yang tersedia                                                                               |
| GET    | /gasolines/:gasolineId       | Menampilkan detail dari `Gasoline` dan menampilan form untuk menambah `Vehicle` Baru yang terhubung dengan `Gasoline` tersebut |
| POST   | /vehicles/:gasolineId        | Membuat `Vehicle` baru yang akan terhubung dengan `Gasoline` yang digunakan oleh `Vehicle` tersebut                            |
| GET    | /vehicles/:vehicleId/addFuel | Menampilkan sebuah form untuk mengisi bensin pada `Vehicle` tersebut                                                           |
| POST   | /vehicles/:vehicleId/addFuel | Menambahkan bensin pada `Vehicle` tersebut                                                                                     |
| GET    | /vehicles/:vehicleId/delete  | Menghapus sebuah `Vehicle`                                                                                                     |

**Route yang dibuat haruslah sama dengan apa yang ditulis disini**

## Release 4

Buatlah sebuah tampilan pada route `/gasolines` yang akan menampilkan seluruh `Gasoline` yang tersedia diurutkan berdasarkan `id` dari bensin tersebut.

Data yang harus ditampilkan pada route ini adalah:

| Field     | Description                                       |
| --------- | ------------------------------------------------- |
| Id        | Id dari bensin tersebut                           |
| Name      | Nama dari bensin tersebut                         |
| Price     | Harga dari bensin tersebut                        |
| Quota     | Jumlah bensin yang tersedia                       |
| Total Car | Jumlah `Vehicle` yang menggunakan bensin tersebut |

Untuk setiap bensin akan sebuah button `Show All Car` yang dapat digunakan untuk melihat detail dari bensin tersebut.

## Release 5

Buatlah sebuah tampilan pada route `/gasolines/:gasolineId` yang akan menampilkan semua `Vehicle` yang menggunakan bensin tersebut diurutkan berdasarkan `id` dari vehicle tersebut.

Data `Vehicle` yang harus ditampilkan adalah

| Field    | Description                                                         |
| -------- | ------------------------------------------------------------------- |
| Id       | Id dari `Vehicle` tersebut                                          |
| Name     | Nama dari `Vehicle` tersebut                                        |
| Fuel     | Jumlah bensin yang sudah terisi pada `Vehicle` tersebut             |
| Max Fuel | Jumlah maksimum bensin yang dapat ditampung oleh `Vehicle` tersebut |

Pada setiap `row` dari `Vehicle` akan ada beberapa button:

- `Add More Fuel` Button untuk mengisi bensin pada `Vehicle` tersebut.
- `Remove Car` Button untuk menghapus mobil tersebut.

Buatlah sebuah instance method `fuelPercentage` pada model `Vehicle` yang akan menghasilkan persentase bensin yang terisi dengan maximum fuel pada `Vehicle` tersebut dan tambahkan `fuelPercentage` tersebut pada tampilan yang sudah dibuat sebelumnya.

Data `Vehicle` yang harus ditampilkan setalah membuat instance method adalah

| Field           | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| Id              | Id dari `Vehicle` tersebut                                          |
| Name            | Nama dari `Vehicle` tersebut                                        |
| Fuel            | Jumlah bensin yang sudah terisi pada `Vehicle` tersebut             |
| Max Fuel        | Jumlah maksimum bensin yang dapat ditampung oleh `Vehicle` tersebut |
| Fuel Percentage | Persentase bensin yang sudah terisi pada `Vehicle` tersebut         |

## Release 6

Masih pada route `/gasolines/:gasolineId` buatlah sebuah form untuk membuat `Vehicle` baru,

Data yang harus diinput ketika membuat `Vehicle` baru adalah:

- name: Nama dari `Vehicle` yang akan kita buat.
- maxFuel: Kapasitas maximum bensin yang dapat diisi pada `Vehicle` tersebut.

Setiap saat membuat `Vehicle` yang baru maka ada beberapa data yang akan terisi secara otomatis:

- fuel: 0 ( Setiap mobil baru akan memiliki bensin `0`)
- GasolineId: disesuaikan dengan routing yang sedang di akses oleh user tersebut.

Lakukanlah validasi pada model untuk field yang akan di input oleh user:

- name: Tidak boleh kosong ( message yang ditampilkan: `Please Input the vehicle name`)
- maxFuel: Tidak boleh menginput angka kurang dari `10` ( message yang ditampilkan: `Maximum Fuel should be more than 10 Litre`)

## Release 7

Buatlah sebuah tampilan pada routing `/vehicles/:vehicleId/addFuel` yang digunakan untuk mengisi bensin pada setiap `Vehicle`. Route ini dapat diakses dengan menekan tombol `Add More Fuel` pada setiap `Vehicle` yang tampil di route `/gasolines/:gasolineId`

Pada tampilan ini buatlah form yang akan memiliki sebuah radio button untuk jumlah bensin yang akan dimasukkan ke dalam `Vehicle` tersebut dengan syarat:

- Hanya bisa menginput bensin dengan kelipatan dua ( `2 Litre`, `4 Litre`, `6 Litre` , `dst`)

Buatlah sebuah helper yang dapat digunakan untuk generate opsi jumlah bensin yang dapat diisi oleh `Vehicle`, dengan requirement:

- Tidak boleh menampilkan opsi yang melebihi kapasitas bensin `Vehicle` tersebut contoh ( maxFuel: `10 Litre` tidak akan memunculkan opsi `12 Litre`)
- Tidak boleh menampilkan opsi yang melebihi quota bensin tersebut contoh ( jika quota bensin adalah `10 Litre` maka tidak akan menampilkan opsi `12 Litre` )
- Jika quota dari bensin lebih kecil dari maxFuel pada `Vehicle` tersebut maka tidak boleh ada opsi yang melebihi quota bensin tersebut
  ( jika maxFuel `Vehicle` kita `10 Litre` tetapi quota bensinnya `8 Litre` maka maksimum opsi yang harus di generate adalah `8 Litre` tidak akan menampilkan opsi `10 Litre` )

Buatlah juga validasi yang memastikan bahwa jumlah bensin yang di isi tidak kosong

## Release 8

Buatlah sebuah routing `/vehicles/:vehicleId/addFuel` dengan method `POST` untuk menghandle pengisian bensin pada tampilan yang sudah kita buat di release sebelumnya.
Setiap kali routing ini dipanggil maka akan menambahkan `fuel` yang terisi pada `Vehicle` tersebut.

## Release 9

Buatlah juga sebuah hooks yang akan digunakan untuk mengurangi `quota` dari `Gasoline` setelah pengisian bensin berhasil dilakukan.

Contoh:
Ketika `Vehicle` A mengisi bensin `2 Litre` maka `fuel` pada `Vehicle` tersebut akan bertambah `2 litre`, dan `quota` bensin akan dikurangi sebanyak `2 Litre`

Hints

- https://github.com/sequelize/sequelize/issues/1814
- https://sequelize.org/master/class/lib/model.js~Model.html#instance-method-update ( Kalian juga bisa menggunakan update menggunakan instance method)

## Release 10

Buatlah sebuah routing `/vehicles/:vehicleId/delete` dengan method `GET` yang akan digunakan untuk menghapus `Vehicle` dari database. Route ini dapat diakses dengan menekan tombol `Remove Car` pada setiap `Vehicle` yang tampil di route `/gasolines/:gasolineId`.

Lakukan redirect ke halaman `/gasolines/:gasolineId` ketika sudah berhasil menghapus `Vehicle` tersebut.
