## Cluster System
> ⏰ Time Estimation: ~90 mins


Pada challenge kali ini kamu diwajibkan untuk membuat code dalam struktur MVC, menggunakan database SQLite, package node-sqlite3 / npm sqlite3 dan callback

Input akan diterima lewat Terminal kamu dan urutan command WAJIB mengikuti requirement yang disediakan.

## Preparation
Telah disediakan file `package.json`, `setup.js`, dan `seed.js` untuk membuat *database* dan *table* yang diperlukan. Jadi kamu hanya perlu menjalankan perintah ini sebelum memulai coding:
```bash 
npm install
node setup.js
node seed.js
```

Berikut adalah skema dari database yang disediakan:
- `Properties`
  - `id (INTEGER, PK, AI)`
  - `street (TEXT)`
  - `number (INTEGER)`
  - `type (VARCHAR}`
  - `price (INTEGER)`
  - `certificate (VARCHAR)`
  - `personId (INTEGER)`

- `People`
  - `id (INTEGER, PK, AI)`
  - `idCard (VARCHAR)`
  - `firstName (VARCHAR)`
  - `lastName (VARCHAR)`
  - `credit (INTEGER)`

## General
Aplikasi ini memiliki **3 Fitur Utama dan 1 Fitur Roket**
  - Add Property: Untuk menambahkan sebuah `Properties`.
  - List sale: Untuk menampilkan property yang masih dijual
  - Buy Property: Person dapat membeli property yang diinginkan.
  - List sold out: Untuk menampilkan property yang telah terjual (FITUR ROKET)

## Command
```bash
  Perintah yang perlu kamu buat adalah sebagai berikut:

  node index.js property/add <street> <number> <type> <price>
  node index.js property/sale <orderColumn> <orderType>
  node index.js property/buy <propertyId> <idCard> <firstName> <lastName> <downPayment>
  node index.js property/soldout <orderColumn> <orderType>

```

## RELEASE 0
#### Add Property
Pada feature ini kamu diminta untuk menambahkan data  `Property`.
```javascript
  COMMAND:
  node index.js property/add <address> <number> <type> <price>

  EXAMPLE:
  node index.js property/add 'Jl. Anggrek' 1 Amsterdam 400000

  OUTPUT:
  Success add property Amsterdam at Jl. Anggrek, No 1
  a total of 8 registered properties 

  EXAMPLE:
  node index.js property/add 'Jl. Anggrek' 1 Amsterdam 400000

  OUTPUT:
  Duplicate property

  NOTES:
   - 8 registered properties berasal dari jumlah total properti yang terdaftar
```

#### RULES: 
  - Validasikan tidak ada alamat yang sama (dilihat dari nama jalan dan nomor rumah)
  - Saat didaftarkan `certificate` dan `personId` nilainya tidak perlu diisi.

## RELEASE 1
#### List Sale
  Pada feature ini kamu diminta untuk menampilkan daftar `Property` yang belum terjual
```javascript
  COMMAND:
  node index.js property/sale <orderColumn> <orderType>

  EXAMPLE:
  node index.js property/sale price asc

  OUTPUT:
  1. Amsterdam at Jl. Anggrek, No 1 price 400000
  2. Amsterdam at Jl. Anggrek, No 2 price 400000
  3. Amsterdam at Jl. Anggrek, No 4 price 400000
  4. London at Jl. Mawar, No 1 price 500000

  TOTAL PROPERTY AVAILABLE: 4
```



## RELEASE 2
#### Buy Property
Pada feature ini melayani penjualan sebuah property 

```javascript
  COMMAND:
  node index.js property/buy <propertyId> <idCard> <firstName> <lastName>  <money>

  EXAMPLE:
  node index.js property/buy 1 1000 Abdul Rahman 100000

  OUTPUT:
  Unsufficient down payment

  EXAMPLE:
  node index.js property/buy 1 10001 Muhammad Ramadiansyah 200000

  OUTPUT:
  property Amsterdam at Jl.Anggrek, No 1 boght by Muhammad Ramadiansyah with certificate MU001398
```

#### RULES: 
- Validasikan rumah yang apakah rumah tersebut sudah terjual atau belum ke orang.
- Validasi pembeli hanya dapat membeli properti tersebut dengan minimal uang muka 30% dari harga rumah dengan kondisi pembeli tidak memiliki hutang lain.
- Nilai cicilan di simpan pada kolom `credit` pada `People`
- Validasi apakah pembeli tersebut telah terdaftar pada `People` jika belum terdaftar maka akan didaftarkan secara otomatis.
- `certificate` hasil dari < 2 huruf pertama nama pembeli> + < idProperty > + < 3 angka random >


## RELEASE ROKET

#### List Sold Out
  Pada feature ini kamu diminta untuk menampilkan daftar `Property` yang belum terjual.

```javascript
  COMMAND:
  node index.js property/soldout <orderColumn> <orderType>

  EXAMPLE:
  node index.js property/soldout price desc

  OUTPUT:
  1. London at Jl. Mawar, No 2 price 500000
  2. Amsterdam at Jl. Anggrek, No 3 price 400000
  2 sold out propery, total sales 900000
```