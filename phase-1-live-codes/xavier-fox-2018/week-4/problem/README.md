# Robot Factory

Robot Factory adalah sebuah aplikasi menggunakan **Express** dan **Sequelize**
untuk memproduksi robot pada pabrik pabrik yang tersedia. Baca setiap specification dengan baik.

Berikut adalah link demo untuk membantu kalian mengerjakan tugas ini
[Link Demo](https://xavier-livecode4.herokuapp.com/)

Fokus pada fitur terlebih dahulu tampilan tidak harus sama seperti yang ditampilkan di demo.

Lakukan pengerjaan fitur sesuai dengan release yang diperintahkan oleh soal.

## Release 0

Install dependencies seperti: express, sequelize, dll. Inisialisasi project kalian menggunakan command yang disediakan oleh sequelize. Isi konfigurasi database, database HARUS diberi nama **xavier_live_code_week_4**.

## Release 1

Buatlah semua migration dengan spesifikasi sebagai berikut:

- Factories
  - name (string)
  - income ( integer )
  - outcome ( integer )
- Robots
  - name (string)
  - stock (integer)
  - price ( integer)

Relasi untuk kedua table ini adalah satu `Factory` dapat memproduksi banyak `Robot`, dan satu `Robot` hanya boleh dibuat pada satu `Factory`. Kamu boleh menambahkan kolom baru untuk memenuhi relasi tersebut, selain itu **HARUS** mengikuti requirement di atas.

## Relase 2

Buatlah dua migrations baru untuk menambahkan default value angka `0` pada kolom `income` dan `outcome`.

## Release 3

Buatlah seeders untuk mengisi data-data `Factory` setidaknya 3 data.

## Release 4

Buatlah routing ke halaman `/factories` yang akan menampilkan data - data factory yang sudah kamu buat pada release 3. **Routing harus sama dengan requirement**

Data yang kamu harus tampilan adalah:
- id
- name
- income
- outcome


## Release 5

Buatlah sebuah fitur **CRU** untuk `Robot`. Format **Harus Sama Persis** dengan ketentuan sebagai berikut:

| METHOD | ROUTE                          | DESCRIPTION                                                                              |
| ------ | ------------------------------ | ---------------------------------------------------------------------------------------- |
| GET    | `/factories/detail/:factoryId` | Menampilkan detail data factory dan semua `Robots` yang diproduksi oleh factory tersebut |
| POST   | `/robots/register/:factoryId`  | Membuat `Robot` baru pada sebuah pabrik                                                  |
| POST   | `/robots/buy/:factoryId`       | Membeli `Robot` pada sebuah pabrik                                                       |
| POST   | `/robots/produce/:factoryId`   | Menambahkan stock `Robot` pada sebuah pabrik                                             |

## Release 6

Buatlah sebuah tampilan untuk menampilkan Detail dari sebuah factory dengan syarat sebagai berikut:

- Nama factory.
- Income factory.
- Outcome factory.
- Sebuah Form untuk menambahkan robot baru. Dimana form tersebut berisi
  - Nama
  - Stock
  - Price
- List semua robot yang dibuat pada factory tersebut. ( Tampilkan data robot yang sudah di urutukan berdasarkan nama robotnya).
- Pada setiap baris robot memiliki action yaitu:
  - Produce ( menambahkan stock robot) 
  - Buy ( membeli robot yang ada)

## Release 7

Buatlah validation pada form ketika menambahkan Robot baru 
- Name harus terdiri dari 2 karakter atau lebih
- Stock tidak boleh kosong, maximum stock yang dapat diinput adalah 1000
- Price yang di input tidak boleh minus. Maximum harganya 1000000


**Rules**
- Setiap kali berhasil memproduksi robot, maka pabrik tersebut mengeluarkan biaya produksi (outcome) sebesar `jumlah robot yang dibuat * harga per robot`. Gunakan **Hooks** untuk membuat fitur ini.


## Release 8

Buatlah sebuah fitur untuk membeli robot yang ada pada pabrik tersebut.

**Setiap pembelian harus di validasi dengan detail sebagai berikut**

- Tidak boleh membeli robot melebihi jumlah stock yang dimiliki oleh factory tersebut. Error message yang harus ditampilkan adalah `Oops, Robot {robot name} out of stock`. Lihat demo jika bingung. 

**Rule**

- Setiap pembelian robot, income pada pabrik akan bertambah dengan rumus. `(Price *  115% * qty)`. Gunakan **Hooks** untuk membuat fitur ini. 


**Hints**

Setiap kali `Hooks` dijalankan, mereka mengirimkan parameter `options`  yang bisa kita gunakan untuk menambahkan data yang bisa kita olah pada hooks.

```javascript
  Robot.update({

  }, {
    // Options
  })
```

## Release 9

Buatlah sebuah fitur produce dimana fitur ini berfungsi untuk menambahkan stock robot pada sebuah pabrik.

**Rules**
- Setiap kali berhasil memproduksi robot, maka pabrik tersebut mengeluarkan biaya produksi (outcome) sebesar `jumlah robot yang dibuat * harga per robot`.


## Release 10 

Tampilkan kolom Profit pada table Factory  , dimana profit didapatkan dari

Rumus : 
`Profit = Income  - Outcome`  (Dilarang menambahkan logic lewat **View** atau **Controller**). Coba pikirkan apakah kita akan menggunakan instance method / helper.

## Release 11

Tambahkan Field Profit pada saat menampilkan detail sebuah pabrik.

## Release 12

Tambahkan Background color pada masing-masing column Profit 
Dimana rulesnya adalah: 

- **Merah  -> kurang dari 0 ( minus ) -> kode hex (#d9534f)**
- **Kuning -> antara 0 sampai 499000 -> kode hex (#ffbb33)**
- **Hijau  -> Lebih sama dengan 500000 -> kode hex(#00C851)**

## Release 13

Formatlah semua uang yang ditampilkan pada aplikasi ini menjadi format uang **USD**.

Coba kamu pikirikan best practice-nya fungsi ini akan disimpan di dalam Model sebagai class method atau instance method / Helper?

## Release 14

Buatlah fitur sort pada halaman `factory`. Buatlah kolom `Name`, `Income`, `Outcome` pada tampilan semua factory menjadi sebuah link yang dapat di klik.

Ketika header kolom di-klik, maka akan disorting sesuai dengan kebalikannya. Default awal adalah ASCENDING, ketika di-klik sorting Factory akan terurut ASC by name/income/outcome.

Contoh Format URL ketika melakukan sorting
`/factories?searchBy=name&orderBy=ASC`

Dimana jika kita melakukan klik sekali lagi setelah ASC pada kolom name, maka orderBy nya akan berubah menjadi DESC. Begitupun sebaliknya.

HINT: Untuk mendapatkan parameter setelah tanda "?" pada url, gunakan `req.query`.

