# Playlist

Challenge kali ini adalah membuat aplikasi playlist song sederhana menggunakan **Express** dan **Sequelize**.
Baca tiap *specification* dengan baik, ikuti apa yang diminta.

**NOTE**
DILARANG MENGGUNAKAN EXPRESS GENERATOR! MENGGUNAKAN EXPRESS GENERATOR MEMBUAT NILAI KAMU DIANULIR

Contoh aplikasi di link berikut https://playlist-song.herokuapp.com/

## Spec 0
Install dependencies seperti: `express`, `sequelize`, dan npm-npm yang kalian perlukan. Inisialisasi project kalian menggunakan command yang disediakan oleh `sequelize-cli`. Isi konfigurasi database, database *HARUS* diberi nama **victory_live_code_week_4**

## Spec 1
Buat semua *migration* yang diperlukan oleh aplikasi ini:
- Playlists
 - `namePlaylist (string)`
 - `description (string)`
 - `rating (float)`
- Songs
 - `title (string)`
 - `singerName (string)`
 - `releasedYear (integer)`
 - `genre (string)`

Relasi antar kedua *table* adalah 1 `Playlist` memiliki banyak `Song`. Kamu boleh menambahkan kolom baru untuk memenuhi relasi tersebut, selain itu **HARUS** mengikuti *requirement* di atas.

## Spec 2
Buat 2 *migration* baru. Satu untuk menghapus kolom `rating` pada Playlists dan satu lagi untuk menambahkan kolom `rating` dengan type float pada Songs dengan *default value* adalah 1

## Spec 3
Buat *seed* untuk mengisi `Playlists` sebanyak 4:
  - K-POP
  - EDM
  - Jazz
  - Country

## Spec 4
Buat CRUD untuk Songs dengan format **HARUS SAMA PERSIS** routing dengan ketentuan sebagai berikut:

| Method | Route            | Description |
|--------|------------------|-------------|
| GET    | `/songs`         | Menampilkan data `Songs` |
| POST   | `/songs`         | Create `Songs` |
| GET    | `/songs/[id]/edit` | Mengedit data `Songs`|
| POST   | `/songs/[id]/edit` | Menyimpan data `Songs` yang diupdate |
| GET    | `/songs/[id]/delete` | Menghapus data `Songs` sesuai dengan id yang dipilih

## Spec 5
Buat halaman untuk menampilkan `Songs` dimana diurutkan berdasarkan rating lagu yang paling tinggi dan *form* untuk menambahkan `Songs`

## Spec 6
Buat halaman untuk menambah `Songs` dimana:
  - input type `title` adalah text
  - input type `singerName` adalah text
  - input type `releasedYear` adalah text
  - input type `rating` adalah text
  - input type `genre` adalah radio dengan value:
    - k-pop
    - edm
    - jazz
    - country

Jika value yang diinput pada `releasedYear` kosong maka default value yang akan tersimpan pada database adalah tahun sekarang **TANPA mengubah atau menambahkan migration dan field pada kolom model**

## Spec 6
Buat halaman untuk edit `Songs` dimana semua datanya ter-*populate* sebagai value di masing-masing input-nya.

## Spec 7
Buat validation sesuai keterangan berikut:
- `Songs`
  - `title` harus diisi
  - `singerName` harus diisi
  - `rating` hanya bisa diisi oleh range angka dari `1` sampai `5`
  - `releasedYear` hanya bisa diisi oleh number

## Spec 8
Buat halaman/form dan routes untuk Playlist. Format routing **HARUS SAMA PERSIS** dengan ketentuan sebagai berikut:

| Method | Route          | Description |
|--------|----------------|-------------|
| GET    | `/playlists`   | Menampilkan data `Playlists` |
| GET    | `/playlists/[id]/addSong` | Menampilkan data `Playlists` yang dipilih dan data-data `Songs` |
| GET   | `/playlists/[id]/addSong/[idSong]` | Menambahkan `Songs` pada `Playlists` |
| GET    | `playlists/[id]/viewPlaylist` | Melihat semua data `Songs` pada playlist tersebut

## Spec 9
Buat halaman/form dan routes untuk menambahkan lagu ke dalam menu Playlist. Dimana terdapat masing-masing link/button untuk menuju ke route '/playlists/[id]/addSongs'

## Spec 10
Pada route `/playlists/[id]/addSong` akan menampilkan semua data `Songs.` **Data songs yang ditampilkan dalam pilihan **HARUS** songs yang belum memiliki relasi di `Playlist` manapun

## Spec 11
Saat menekan link `Add this Song` pada form `/playlists/[id]/addSong`, maka `Song` tersebut akan bertambah pada playlist tersebut **gunakan route /Playlist/[id]/addSong/[idSong]**. Jika berhasil maka kembalikan/redirect ke halaman/form `/playlists/[id]/addSong`

## Spec 12
Buat fungsi untuk mendapatkan sudah berapa tahun sebuah `songs`, kemudian pada halaman `/playlists/[id]/viewPlaylist` tampilkan semua `Song` yang terdapat pada Playlist tersebut dengan ketentuan sebagai berikut:
 - title
 - singerName
 - released year
 - has been released
 - rating

kolom `has been released` akan diisi nilai dari fungsi ini tanpa mengubah/menambahkan kolom pada model `Songs`. **Coba kamu pikirikan best practice-nya fungsi ini akan disimpan di dalam Model sebagai class method atau instance method / Helper?**

## Spec 13
Buat fungsi untuk mengubah rating yang tadinya berupa angka menjadi `*` sebanyak jumlah rating **tanpa** mengubah `Model` dan `Controller` dan tanpa memasukkan logic proses pada View.

Gunakan fungsi ini pada halaman/form `Songs` dan `View Playlist`

## Spec 14
Buatlah fitur *sort* pada halaman `Songs`. Ubahlah nama kolom di company title dan rating yang tadinya berupa string biasa menjadi sebuah link.

Ketika header kolom di-klik(title/rating), maka akan disorting sesuai dengan kebalikannya. Default awal adalah ASCENDING, ketika di-klik sorting `Songs` akan terurut DESC by title/rating

Ketika `title` di-klik PERTAMA kali, link-nya akan menuju ke routing : /songs/sort?name=asc
Ketika `title` di-klik KEDUA kali, link-nya akan menuju ke routing : /songs/sort?name=desc

Begitupun dengan `rating`

**HINT: Untuk mendapatkan parameter setelah tanda "?" pada url, gunakan req.query**
