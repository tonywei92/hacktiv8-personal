# BITCOIN EXCHANGE SYSTEM
> ⏰ Time Estimation: ~90 mins

Pada challenge ini kamu akan membuat sistem sederhana untuk sebuah bitcoin exchange (tempat untuk menjual dan membeli bitcoin).

Input akan diterima lewat terminal

### Preparation

Telah disediakan file:
- package.json yang memuat daftar dependencies yang dibutuhkan.
- setup.js untuk membuat table-table yang dibutuhkan.

Jalankan perintah ini sebelum memulai coding:

```bash
npm install
node setup.js
```


Berikut adalah skema dari database yang disediakan:

`Users`
* id (INTEGER, PK, AI)
* name (TEXT)
* email (TEXT)
* phone (TEXT)
* rupiahBalance (INTEGER)
* bitcoinBalance (REAL)

`Transactions`
* id (INTEGER, PK, AI)
* userId (INTEGER, FK)
* type (TEXT)
* price (INTEGER)
* amount (REAL)
* time (TEXT)

`Prices`
* id (INTEGER, PK, AI)
* time (TEXT)
* buy (INTEGER)
* sell (INTEGER)

Antara table `Users` dengan `Transactions` memiliki hubungan one-to-many (Satu user bisa melakukan banyak transaksi).

Sedangkan table `Prices` berisi history perubahan-perubahan harga beli dan jual yang ditentukan oleh exchanger.

## RELEASE 0

Lakukanlah perubahan pada table `Users` dengan menambahkan column `createdAt` yang akan berisi tanggal user registrasi.

Dan kerjakanlah pada file setup.js

Setelah itu jalankanlah command ini

```bash
node seed.js
```


### Commands

Perintah-perintah yang perlu kamu buat adalah:

```bash
node app.js price
node app.js price:set <buyPrice> <sellPrice>
node app.js user:list
node app.js user:register <name> <email> <phone>
node app.js user:deposit <userId> <IDR|BTC> <amount>
node app.js user:withdraw <userId> <IDR|BTC> <amount>
node app.js user:buy <userId> <amount>
node app.js user:sell <userId> <amount>
```

## RELEASE 1

* `node app.js price`

  Akan menampilkan harga terkini dari bitcoin.
  - `buy` adalah harga user membeli bitcoin dari exchange
  - `sell` adalah harga user menjual bitcoin ke exchange

  ```bash
  output:
    Harga saat ini adalah:
    - buy: 57000000
    - sell: 56950000
  ```

* `node app.js price:set <buyPrice> <sellPrice>`

  adalah command yang digunakan oleh exchange untuk menginput harga bitcoin terkini.

  - `buyPrice` adalah harga user membeli bitcoin dari exchange
  - `sellPrice` adalah harga user menjual bitcoin ke exchange

  Harga terkini akan ditambahkan sebagai entry baru di table `Prices`

  ```bash
  example:
    node app.js price:set 57100000 5750000  

  output:
    Input harga terbaru berhasil
  ```

## RELEASE 2

* `node app.js user:list`

  akan menampilkan semua user yang terdaftar, dan pada setiap user akan terdapat info `lastActivity`.
  Value `lastActivity` adalah waktu terakhir user melakukan transaksi. Sedangkan jika user belum pernah melakukan transaksi, maka valuenya adalah waktu user melakukan registrasi.

  notes: Dilarang menambahkan column baru ke database! 

  ```bash
  output:
    [ User {
        id: 1,
        name: 'Yoki Suprayogi',
        email: 'yoki@mail.com',
        phone: '0812-3456-7890',
        balance: { rupiah: 2000000, bitcoin: 1.5 },
        createdAt: 'Sat Mar 16 2019 10:14:30 GMT+0700 (Western Indonesia Time)',
        lastActivity: 'Tue Mar 18 2019 10:14:30 GMT+0700 (Western Indonesia Time)' },
      User {
        id: 2,
        name: 'Armedi',
        email: 'medi@mail.com',
        phone: '0895-6789-0123',
        balance: { rupiah: 1500, bitcoin: 24 },
        createdAt: 'Sun Mar 17 2019 20:20:19 GMT+0700 (Western Indonesia Time)',
        lastActivity: 'Mon Mar 18 2019 15:58:32 GMT+0700 (Western Indonesia Time)' },
      User {
        id: 3,
        name: 'Wika Silo',
        email: 'wika@mail.com',
        phone: '0815-6789-0123',
        balance: { rupiah: 15000000, bitcoin: 0 },
        createdAt: 'Sun Mar 17 2019 08:11:49 GMT+0700 (Western Indonesia Time)',
        lastActivity: 'Mon Mar 18 2019 07:08:45 GMT+0700 (Western Indonesia Time)' },
      User {
        id: 4,
        name: 'Muhammad Ramadiansyah',
        email: 'rama@mail.com',
        phone: '0823-4567-8901',
        balance: { rupiah: 0, bitcoin: 0 },
        createdAt: 'Tue Mar 19 2019 11:15:26 GMT+0700 (Western Indonesia Time)',
        lastActivity: 'Tue Mar 19 2019 11:15:26 GMT+0700 (Western Indonesia Time)' } ]
  ```

* `node app.js user:register <name> <email> <phone>`

  adalah command untuk registrasi user

  ```bash
  example:
    node app.js user:register 'Sandi Amin' sandiamin@mail.com 0817-8901-2345

  output:
    Selamat Sandi Amin, anda telah berhasil terdaftar di sistem kami.
  ```

## RELEASE 3

* `node app.js user:deposit <userId> <IDR|BTC> <amount>`

  melalui menu ini user bisa memilih untuk deposit (penambahan dana) rupiah (IDR) atau bitcoin (BTC)

  ```bash
  example:
    node app.js user:deposit 2 IDR 100000000

  output:
    Anda telah berhasil melakukan deposit rupiah sebesar 100000000
  ```

* `node app.js user:withdraw <userId> <IDR|BTC> <amount>`

  Melalui menu ini user bisa memilih untuk withdraw (penarikan dana) rupiah (IDR) atau bitcoin (BTC)

  ```bash
  example:
    node app.js user:withdraw 2 BTC 5.3

  output:
    Anda telah berhasil melakukan withdraw rupiah sebesar 5.3
  ```

  Validasi bahwa saldo user cukup untuk melakukan withdraw

  ```bash
  example:
    node app.js user:withdraw 2 IDR 150000000

  output:
    Maaf, saldo anda tidak cukup
  ```

## RELEASE 4

* `node app.js user:buy <userId> <amount>`

  User dapat melakukan pembelian bitcoin dengan perintah ini.

  Harga pembelian diperoleh dari harga terkini/terbaru dari table `Prices`.

  Dengan melakukan buy, maka akan menambahkan daftar transaksi di table `Transactions`, menambah saldo bitcoin user sebanyak `amount`, dan mengurangi saldo rupiah user sebanyak `amount` dikali dengan harga beli.

  ```bash
  example:
    node app.js user:buy 2 0.1

  output:
    Anda telah berhasil melakukan pembelian 0.1 bitcoin
  ```
  Validasi bahwa saldo rupiah user cukup untuk melakukan pembelian bitcoin

  ```bash
  example:
    node app.js user:buy 2 10

  output:
    Maaf, saldo anda tidak cukup
  ```

* `node app.js user:sell <userId> <amount>`

  User dapat melakukan penjualan bitcoin dengan perintah ini.

  Harga penjualan diperoleh dari harga terkini/terbaru dari table `Prices`.

  Dengan melakukan sell, maka akan menambahkan daftar transaksi di table `Transactions`, mengurangi saldo bitcoin user sebanyak `amount`, dan menambah saldo rupiah user sebanyak `amount` dikali dengan harga jual.

  ```bash
  example:
    node app.js user:sell 2 0.05

  output:
    Anda telah berhasil melakukan penjualan 0.05 bitcoin
  ```
  Validasi bahwa saldo bitcoin user cukup untuk melakukan penjualan

  ```bash
  example:
    node app.js user:buy sell 2 1000

  output:
    Maaf, saldo anda tidak cukup
  ```



