# Simple Restaurant Ordering System

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
- `Menus`
  - `id (INTEGER, PK, AI)`
  - `name (TEXT)`
  - `price (REAL)`
  - `isAvailable (INTEGER)` (Untuk menyimpan value `0`/`1`, dimana `0` dianggap `false` dan `1` adalah `true`)

- `Orders`
  - `id (INTEGER, PK, AI)`
  - `menu_id (INTEGER, FK)`
  - `order_date (TEXT)`

## Commands
Perintah yang perlu kalian buat adalah sebagai berikut:
```bash
node index.js menu add <name> <price>
node index.js menu findBy <column_name> <value>
node index.js menu toggleAvailability <id>
node index.js order add <menu_id>
node index.js order delete <id>
```

## Details

- `node index.js menu add <name> <price>`
  
  **Input Example**: `node index.js menu add Pizza 50000`

  **Output**: `'Successfully added a menu with ID: 1'`

  **Explanation**:
  - Ketika command dijalankan, akan menambah menu baru
  - Untuk menampilkan `id` dari data yang baru saja ditambahkan, **dilarang** menggunakan query lagi. Gunakan fungsi yang telah disediakan oleh `node-sqlite3`
  - `isAvailable` secara default harus diisi dengan `1`

- `node index.js menu findBy <column_name> <value>`
  
  **Input Example**: `node index.js menu findBy name burger`

  **Output**:

  Jika data ditemukan:

  ```javascript
  [
    {
      id: 2,
      name: 'Cheese Burger',
      price: 30000,
      isAvailable: 1
    },
    {
      id: 3,
      name: 'Chicken Burger',
      price: 20000,
      isAvailable: 1
    }
  ]
  ```

  Jika data tidak ditemukan:

  ```javascript
  []
  ```

- `node index.js menu toggleAvailability <id>`
  
  **Input Example**: `node index.js menu toggleAvailability 2`

  **Output Example**: `'Cheese Burger is now unavailable'`

  **Explanation**:
  - Ketika command dijalankan, akan mengubah `isAvailable` dari menu yang memiliki id yang telah kamu berikan lewat terminal
  - Value baru untuk `isAvailable` adalah kebalikan dari value yang dimiliki sekarang (jika `0`, ganti `1` dan sebaliknya)
  - Tampilkan `'Menu not found'` jika data menu dengan `id` yang diberikan tidak ditemukan

- `node index.js order add <menu_id>`
  
  **Input Example**: `node index.js order add 1`

  **Output Example**: `'Successfully added an order with ID: 1'`

  **Explanation**:
  - Ketika command dijalankan, akan menambah order baru
  - Untuk menampilkan `id` dari data yang baru saja ditambahkan, **dilarang** menggunakan query lagi. Gunakan fungsi yang telah disediakan oleh `node-sqlite3`
  - `order_date` diisi dengan tanggal sekarang (gunakan built-in function dari JavaScript untuk melakukan hal ini)
  - Jika `isAvailable` milik menu adalah `0`, harus menampilkan `'Menu is not available'`
  - Jika `menu_id` yang diberikan tidak ada di dalam tabel `menus`, harus menampilkan `'Menu not found'`

- `node index.js order delete <id>`
  
  **Input Example**: `node index.js order delete 1`

  **Output Example**: `'Successfully deleted an order with ID: 1'`

  **Explanation**:
  - Ketika command dijalankan, akan menghapus order
  - Jika `id` yang diberikan tidak ada di dalam tabel `orders`, harus menampilkan `'Order not found'`
