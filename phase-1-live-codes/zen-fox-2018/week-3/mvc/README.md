# Broadway System

> ⏰ Time Estimation: ~120 mins

Pada challenge kali ini kamu diwajibkan untuk membuat code dalam struktur MVC, menggunakan database SQLite, package node-sqlite3 / npm sqlite3 dan callback

Input akan diterima lewat Terminal kamu dan urutan command WAJIB mengikuti requirement yang disediakan.

## Preparation
Telah disediakan file `package.json` dan `setup.js` untuk membuat *database* dan *table* yang diperlukan. Jadi kamu hanya perlu menjalankan perintah ini sebelum memulai coding:
```bash
npm install
node setup.js
```

Berikut adalah skema dari database yang disediakan:
- `Audiences`
  - `id (INTEGER, PK, AI)`
  - `firstName (VARCHAR)`
  - `lastName (VARCHAR)`
  - `age (INTEGER)`
  - `email (VARCHAR)`
  - `type (VARCHAR)`
  - `balance (REAL)`

- `Shows`
  - `id (INTEGER, PK, AI)`
  - `show (VARCHAR)`
  - `schedule (DATE)`
  - `price (REAL)`

- `Tickets`
  - `id (INTEGER, PK, AI)`
  - `ticketNumber (VARCHAR)`
  - `amountOfTicket (INTEGER)`
  - `totalInvoice (REAL)`
  - `audienceId (INTEGER, FK)`

Hubungan antara table diatas BUKANLAH Many To Many, melainkan 1 Audience memiliki banyak Tiket.

## RELEASE 0
 - Tambahkan column `isAvailable` bertipe boolean pada table `Shows` dengan default value 0
  ( **harus ditambahkan diluar create table yang sudah disediakan** )

 - Column `email` pada table `Audiences` belum unik. Ubahlah column tersebut menjadi UNIQUE dengan membuat UNIQUE INDEX *harus menggunakan query* . [HINT](https://stackoverflow.com/questions/15497985/how-to-add-unique-constraint-in-already-made-table-in-sqlite-ios)

 RELEASE 0 ditambahkan/dikerjakan pada file setup.js kemudian running kembali node setup.js kalian agar perubahan terjadi

## RELEASE 1
  Telah disediakan file seed.js, running-lah file tersebut agar data Audiences dan Tickets ter-generate!


### Commands
  Perintah yang perlu kamu buat adalah sebagai berikut:
  ```bash
  node index.js shows add [title_show] [schedule] [price]
  node index.js shows findBy [column_name] [value]
  node index.js transaction top3Audience
  node index.js transaction buyTicket [show_id] [email_audiences] [amount_of_ticket]

  ROCKET:
  node index.js transaction refundTicket [ticketNumber] [email_audiences]

  ```

### Details
- `node index.js shows add [title_show] [schedule] [price]`  (format schedule DD MMM YYYY)
  ```
    example:
      node index.js shows add "The Book of Mormon" "12 Dec 2018" 800000

      output:
      'Successfully added a The Book of Mormon'
  ```

- `node index.js shows findBy <column_name> <value>`

    ```
      example:
        node index.js shows findBy price 20000

      output:
      [ Show {
          id: 1,
          show: 'The Book Of Mormon',
          schedule: 'Wed Dec 12 2018 00:00:00 GMT+0700 (WIB)',
          price: 20000,
          isAvailable: 0 },
        Show {
          id: 3,
          show: 'findBy',
          schedule: 'Wed Dec 13 2018 00:00:00 GMT+0700 (WIB)',
          price: 20000,
          isAvailable: 0 } ]
    ```

- `node index.js transaction top3Audience`

   Ketika command dijalankan maka akan menampilkan 3 Audiences yang jumlah transaksi total paling banyak (informasi diambil dari table Ticket).

   ```
    output:
    [ { Fullname: 'Semmi Verian',
        type: 'reguler',
        email: 'semmi@mail.com',
        totalBelanja: 480000 },
      { Fullname: 'Wika Silo',
        type: 'silver',
        email: 'wika@mail.com',
        totalBelanja: 360000 },
      { Fullname: 'Windiana Krismanuyar',
        type: 'gold',
        email: 'windi@mail.com',
        totalBelanja: 180000 } ]
   ```

   *NOTE*: Logic untuk mengambil `Fullname` harus berada di query

- `node index.js transaction buyTicket [show_id] [email_audiences] [amount_of_ticket]`

  Ketika command ini dijalankan maka pengecekan yang terjadi adalah:
  * Jika show_id yang dimasukkan tidak terdapat pada database maka tampilkan `Show tidak ditemukan!`

  * Jika email_audiences yang dimasukkan tidak terdapat pada database maka tampilkan `Member tidak ditemukan!`

  * Setelah pengecekan diatas dilewati maka total yang harus dibayarkan akan dikalkulasi sesuai dengan type member audience:
    * type gold akan mendapatkan diskon sebesar 15%
    * type silver akan mendapatkan diskon sebesar 5%

  * Jika balance dari audience tersebut lebih kecil dibanding total maka tampilkan pesan `Mohon maaf saldo anda tidak cukup`

  * Jika balance cukup atau lebih maka:
    * Data ticket akan bertambah pada table ticket dimana ticketNumber harus tergenerate dengan format TIX[lastName][typeMember][angkaRandom4digit]
    ```
      example: TIXDiansyahgold6680
    ```

    * Balance dari member akan terupdate dan akan memunculkan pesan `Tiket telah terbeli! Nomor tiket anda adalah ${ticketNumber}. Saldo saat ini ${balance}`

- `node index.js transaction refundTicket [ticketNumber] [email_audiences]`

  Ketika command ini dijalankan maka pengecekan yang terjadi adalah:
  * Jika ticketNumber yang diinput tidak terdapat pada database maka tampilkan pesan `Nomor tiket tidak ditemukan`

  * Jika email_audiences yang diinput tidak sama dengan data pada table Ticket dengan ticketNumber maka tampilkan pesan `Email anda tidak sesuai dengan data Nomor Ticket`

  * Setelah pengecekan diatas dilewati maka:
    * remove data ticket tersebut
    * setelah data ticket terhapus, maka balance dari audience/member akan di-refund dan mengeluarkan pesan `Ticket dengan nomor ${ticketNumber} telah dibatalkan. Saldo anda menjadi ${balance}`
