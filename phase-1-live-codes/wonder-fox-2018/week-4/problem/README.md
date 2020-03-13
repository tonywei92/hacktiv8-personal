# Performance Logs

Challenge kali ini adalah membuat aplikasi untuk mencatat performa karyawan menggunakan **Express** dan **Sequelize**.

Baca tiap *specification* dengan baik, ikuti apa yang diminta ya! 😁

Ganbatte 🔥

## Demo Aplikasi

Kamu bisa melihat demo aplikasi di sini:  
[performance-logs](https://performance-logs.herokuapp.com/)  

Style tidak harus sama persis dengan yang ada di demo, prioritaskan fiturnya selesai dulu

## Spec 0
Install dependencies seperti: `express`, `sequelize`, dll. Inisialisasi project kalian menggunakan
command yang disediakan oleh `sequelize`. Isi konfigurasi database, database **HARUS** diberi nama
**live_code_week_4**

## Spec 1
Buat semua *migration* yang diperlukan oleh aplikasi ini:
- Employees
  - `firstName (string)`
  - `lastName (string)`
  - `email (string)`

- Tasks
  - `title (string)`
  - `description (text)`
  - `points (integer)`
  - `isComplete (boolean)`
    - `defaultValue: false`

Relasi antar kedua *table* adalah 1 `Employee` memiliki banyak `Task`. Kamu boleh menambahkan kolom baru untuk memenuhi relasi tersebut, selain itu **HARUS** mengikuti *requirement* di atas.

## Spec 2
Buatlah *migration* baru untuk menambahkan kolom `totalPoints` ke `Employees` dengan `defaultValue` `0`

## Spec 3
Buat *seed* untuk mengisi `Employees`. (3 records)

## Spec 4
Buat **CRUD** untuk *Employees*. Format routing **HARUS SAMA PERSIS** dengan ketentuan sebagai berikut:

| Method | Route             | Description    |
|--------|-------------------|----------------|
| GET    | `/employees`            | Menampilkan data `Employees` |
| GET | `/employees/add` | Menampilkan form untuk membuat `Employee`
| POST   | `/employees/add`            | Create `Employee` baru |
| GET    | `/employees/:id/edit`   | Menampilkan form edit `Employee` dengan isi nilai `Employee` yang akan di-edit |
| POST   | `/employees/:id/edit` | Update data `Employee` berdasarkan `id` |
| GET    | `/employees/:id/delete` | Delete data `Employee` berdasarkan `id` |

NOTE: Untuk route `GET /employees`, tampilkan `Employees` yang telah diurutkan berdasarkan ID. (Dari yang paling baru ke yang paling lama)

## Spec 5
Buat halaman untuk menampilkan `Employees` dan *form* untuk menambahkan `Employee`. Contoh ada di demo aplikasi

## Spec 6
Buat halaman untuk edit `Employee` dimana semua data nya ter-*populate* sebagai value di masing-masing input-nya. Contoh ada di demo aplikasi

## Spec 7
Buat validation sesuai keterangan berikut:
- `Employee`
  - `firstName` harus diisi
  - `lastName` harus diisi
  - `email` harus valid
  - `email` harus **UNIQUE** (Gunakan custom validation)
- `Task`
  - `title` harus diisi
  - `description` harus diisi
  - `points` harus diisi dengan angka
  - `FOREIGN KEY` di tabel ini harus diisi

Contoh tampilan untuk `validation error` bisa kamu liat di demo  

## Spec 8
Buat fitur **Create** dan **Delete** `Task`. Format routing **HARUS SAMA PERSIS** dengan ketentuan sebagai berikut:

| Method | Route             | Description    |
|--------|-------------------|----------------|
| GET    | `/tasks`            | Menampilkan data `Tasks` |
| GET | `/tasks/add` | Menampilkan form untuk membuat `Task`
| POST   | `/tasks/add`            | Create `Task` baru |
| GET    | `/tasks/:id/delete`   | Delete data `Task` berdasarkan `id` |

NOTE TAMBAHAN: Karena `Task` dimiliki oleh `Employee`, maka ketika `Employee` dihapus juga harus menghapus semua `Task` yang dimiliki oleh `Employee` tersebut. Pikirkan cara untuk mengatasi hal ini dan implementasikan ke code kalian 👌

## Spec 9
Buat halaman untuk menampilkan `Tasks` dan *form* untuk menambahkan `Task`.  

Aturan list `Task`:
- Tampilkan `Employee Name` di list `Task` yang merupakan hasil dari `firstName + lastName` (Dilarang menambahkan logic lewat **View** atau **Controller**).
- Tampilkan `Completed`/`Not Completed Yet` pada `Status` (Berdasarkan `isComplete` pada `Task`, dilarang menambahkan logic lewat **View** atau **Controller**).  

Aturan form untuk create `Task`:
- Tampilkan `Employee Name` yang diurutkan berdasarkan `firstName` (Dari A-Z)

Lihat demo jika bingung

## Spec 10
Buatlah fitur **Mark as Completed**, yang akan meng-update `isComplete` pada `Task` menjadi `true` dan menambahkan `totalPoints` `Employee` yang diberikan `Task` tersebut.  

Aturan:
- Untuk menambahkan `totalPoints` **HARUS** lewat *hook*. Pikirkan hook apa yang cocok untuk kasus ini.
- Ketika `isComplete === true`, jangan tampilkan button `Delete`

## Spec 11
Buatlah *helper* untuk membuat format tanggal dari database menjadi `DD/MM/YYYY`, implementasikan helper ini di list `Employees` pada kolom `Joined` (yang valuenya diambil dari `createdAt`).

## Spec 12
Buat fitur *pagination* untuk data `Tasks`. Setiap halaman hanya akan menampilkan 4 baris data, dan
jumlah dari halaman tergantung dari jumlah data yang ada di database, contoh *pagination* ada di demo.
