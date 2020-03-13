# Movies Review System

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
- `Movies`
  - `id (INTEGER, PK, AUTO INCREMENT)`
  - `name (TEXT)`
  - `duration (INTEGER)`
  - `releasedDate (TEXT)`
  - `nowPlaying (INTEGER)` (Untuk menyimpan value `0`/`1`, dimana `0` dianggap `false` dan `1` adalah `true`)

- `Reviews`
  - `id (INTEGER, PK, AUTO INCREMENT)`
  - `movieId (INTEGER, FK)`
  - `description (TEXT)`
  - `rating (INTEGER)`

## Commands
Perintah yang perlu kalian buat adalah sebagai berikut:
```bash
node index.js movie add <name> <duration> <releasedDate>
node index.js movie nowPlaying <id>
node index.js review add <movieId>
node index.js review delete <movieId>
node index.js movie showRecommendation <field>:<orderby>
```

## Details

- `node index.js movie add <name> <duration> <releasedDate>`
  
  **Input Example**: `node index.js movie add Dilan 121 2018-01-23`

  **Output**: `'Successfully added movie with ID: 1'`

  **Explanation**:
  - Ketika command dijalankan, akan menambah movie baru pada database
  - Untuk menampilkan `id` dari data yang baru saja ditambahkan, **dilarang** menggunakan query lagi. Gunakan fungsi yang telah disediakan oleh `node-sqlite3`
  - `nowPlaying` secara default harus diisi dengan `1`

- `node index.js movie nowPlaying <id>`
  
  **Input Example**: `node index.js movie nowPlaying 1`

  **Output Example**: `'Dilan is unavailable on cinema'`

  **Explanation**:
  - Ketika command dijalankan, akan mengubah `nowPlaying` dari movie yang memiliki id yang telah kamu berikan lewat terminal
  - Value baru untuk `nowPlaying` adalah kebalikan dari value yang dimiliki sekarang (jika `0`, ganti `1` dan sebaliknya)
  - Tampilkan `'Movie not found'` jika data movie dengan `id` yang diberikan tidak ditemukan

- `node index.js review add <movieId> <rating> <description>`
  
  **Input Example**: `node index.js review add 1 3 'Filmnya kurang menarik'`

  **Output Example**: `'Successfully added a review with ID: 1'`

  **Explanation**:
  - Ketika command dijalankan, akan menambah review baru
  - Untuk menampilkan `id` dari data yang baru saja ditambahkan, **dilarang** menggunakan query lagi. Gunakan fungsi yang telah disediakan oleh `node-sqlite3`
  - Jika `movieId` yang diberikan tidak ada di dalam tabel `Movies`, harus menampilkan `'Movie not found'`
  - Apabila rating kurang dari 1 dan lebih dari 5 maka tampilkan `'Rating must between 1 and 5'`

- `node index.js review delete <id>`
  
  **Input Example**: `node index.js review delete 1`

  **Output Example**: `'Successfully deleted a review with ID: 1'`

  **Explanation**:
  - Ketika command dijalankan, akan menghapus review
  - Jika `id` yang diberikan tidak ada di dalam tabel `Reviews`, harus menampilkan `'Review not found'`
- `node index.js movie showRecommendation <field>:<orderBy>`
  - Ketika command dijalankan maka akan menampilkan 3 film yang sedang tayang yang sudah berdasarkan name `field` dan `orderBy` yang diinput.
  - `Field` dapat berupa released date, rata-rata rating film dari reviewer, total yang mereview, dan durasi.
  - `orderBy` dapat diurutkan secara `ASC` atau `DESC`
  - Untuk mendapatkan data **wajib** menggunakan `db.each`
  **Input Example**: `node index.js movie showRecommendation rating:desc`
  **Output Example**: 
    ```javascript
      [ 
        { 
          no: 1,
          title: 'Bohemian Rhapsody',
          duration: '131 minutes',
          rating: 5,
          totalReviewer: 2,
          released: '11 November 2018' 
        },
        { 
          no: 2,
          title: 'Dilan',
          duration: '121 minutes',
          rating: 3.75,
          totalReviewer: 4,
          released: '23 Januari 2018' 
        },
        { 
          no: 3,
          title: 'Si Eneng',
          duration: '91 minutes',
          rating: 3,
          totalReviewer: 1,
          released: '11 Oktober 2018' 
        } 
      ]
    ```
  
