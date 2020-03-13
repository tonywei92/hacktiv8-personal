# Simple Ticketing Asian Games System

> ⏰ Time Estimation: ~75 mins

> Topics: `MVC`, `Callback` and `SQLite3`

Pada challenge kali ini kamu diwajibkan untuk membuat code dalam struktur `MVC`, menggunakan database `SQLite` dan package `node-sqlite3` / `npm sqlite3`.

Input akan diterima lewat `Terminal` kamu dan urutan *command* **WAJIB** mengikuti apa yang akan diminta di bawah.

Good luck! 👊

## Preparation
Telah disediakan file `package.json` dan `setup.js` untuk membuat *database* dan *table* yang diperlukan. Jadi kamu hanya perlu menjalankan perintah ini sebelum memulai coding:
```bash
npm install
node setup.js
```

Berikut adalah skema dari database yang disediakan:
- `Tickets`
  - `id (INTEGER, PK, AI)`
  - `name (TEXT)`
  - `price (REAL)`
  - `schedule (TEXT)`
  - `isAvailable (INTEGER)` (Untuk menyimpan value `0`/`1`, dimana `0` dianggap `false` dan `1` adalah `true`)

- `Orders`
  - `id (INTEGER, PK, AI)`
  - `ticketId (INTEGER, FK)`
  - `order_date (TEXT)`

## Commands
Perintah yang perlu kalian buat adalah sebagai berikut:
```bash
node index.js ticket add <name> <price> <schedule> (format schedule DD MMM YYYY)
node index.js ticket findBy <column_name> <value>
node index.js ticket toggleAvailability <id>
node index.js order add <ticket_id>
node index.js order delete <id>
```

## Details

- `node index.js ticket add <name> <price> <schedule>` (format schedule DD MMM YYYY)

  **Input Example**: `node index.js ticket add "Pertandingan Penyisihan Wushu" 50000 "19 Aug 2018"`

  **Output**: `'Successfully added a ticket with ID: 1'`

  **Explanation**:
  - Ketika command dijalankan, akan menambah ticket baru
  - Untuk menampilkan `id` dari data yang baru saja ditambahkan, **dilarang** menggunakan query lagi. Gunakan fungsi yang telah disediakan oleh `node-sqlite3`
  - `isAvailable` secara default harus diisi dengan `1`

- `node index.js ticket findBy <column_name> <value>`

  **Input Example**: `node index.js ticket findBy price 70000`

  **Output**:

  Jika data ditemukan:

  ```javascript
  [
    {
      id: 2,
      name: 'Pertandingan Bulutangkis Semifinal',
      price: 70000,
      schedule: 'Wed Aug 22 2018 00:00:00 GMT+0700 (WIB)',
      isAvailable: 1
    },
    {
      id: 3,
      name: 'Pertandingan Basket Semifinal',
      price: 70000,
      schedule: 'Sat Aug 25 2018 00:00:00 GMT+0700 (WIB)'
      isAvailable: 1
    }
  ]
  ```

  Jika data tidak ditemukan:

  ```javascript
  []
  ```

- `node index.js ticket toggleAvailability <id>`

  **Input Example**: `node index.js ticket toggleAvailability 2`

  **Output Example**: `'Pertandingan Bulutangkis Semifinal is now unavailable'`

  **Explanation**:
  - Ketika command dijalankan, akan mengubah `isAvailable` dari ticket yang memiliki id yang telah kamu berikan lewat terminal
  - Value baru untuk `isAvailable` adalah kebalikan dari value yang dimiliki sekarang (jika `0`, ganti `1` dan sebaliknya)
  - Tampilkan `'Ticket not found'` jika data ticket dengan `id` yang diinput pada terminal tidak ditemukan  **dilarang** menggunakan query lagi. Gunakan fungsi yang telah disediakan oleh `node-sqlite3`


- `node index.js order add <ticket_id>`

  **Input Example**: `node index.js order add 1`

  **Output Example**: `'Successfully added an order with ID: 1'`

  **Explanation**:
  - Ketika command dijalankan, akan menambah order baru
  - Untuk menampilkan `id` dari data yang baru saja ditambahkan, **dilarang** menggunakan query lagi. Gunakan fungsi yang telah disediakan oleh `node-sqlite3`
  - `order_date` diisi dengan tanggal sekarang (gunakan built-in function dari JavaScript untuk melakukan hal ini)
  - Jika `isAvailable` milik ticket adalah `0`, harus menampilkan `'Ticket is not available'`
  - Jika `ticketId` yang diinput pada terminal tidak ada di dalam tabel `Ticket`, maka tampilkan `'Ticket not found'`

- `node index.js order delete <id>`

  **Input Example**: `node index.js order delete 1`

  **Output Example**: `'Successfully deleted an order with ID: 1'`

  **Explanation**:
  - Ketika command dijalankan, akan menghapus order
  - Jika `id` yang diberikan tidak ada di dalam tabel `orders`, harus menampilkan `'Order not found'` **dilarang** menggunakan query lagi. Gunakan fungsi yang telah disediakan oleh `node-sqlite3`
