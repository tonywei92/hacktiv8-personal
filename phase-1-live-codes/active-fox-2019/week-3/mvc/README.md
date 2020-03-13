## SUMMER SCHOOL SYSTEM
> ⏰ Time Estimation: ~105 mins


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
- `Schools`
  - `id (INTEGER, PK, AI)`
  - `name (text)`
  - `revenue (INTEGER)`

- `Students`
  - `id (INTEGER, PK, AI)`
  - `name (text)`
  - `username (VARCHAR)`
  - `level (INTEGER)`
  - `totalCourse (INTEGER`
  - `stage (VARCHAR)`
  - `SchoolId (INTEGER, FK, REFERENCES Schools(Id))` 

## General
Applikasi ini memiliki **3 Fitur Utama** dan **1 Fitur Roket**
  - Registrasi Student: Untuk mendaftarkan satu `student` ke satu `school`.
  - Take Course: Student dapat mengambil course untuk meningkatkan kemampuan dan levelnya.
  - Graduates: menghapus student yang sudah tidak memiliki total course yang dapat diambil.
  - List School and Students(Rocket): Melihat ada sekolah apa saja beserta murid yang mendaftar disekolah tersebut.

## Command
```bash
  Perintah yang perlu kamu buat adalah sebagai berikut:

  node index.js register <schoolId> <studentName> <level> <totalCourse> 
  node index.js "take course" <student's username>
  node index.js graduates <schoolId>

  ROCKET:
  node index.js list
```

## RELEASE 0
#### Register Student
Pada feature ini kamu diminta untuk membuat sistem pendaftaran `student`.
```javascript
  COMMAND:
  node index.js register <schoolId> <studentName> <level> <totalCourse>

  EXAMPLE:
  node index.js register 1 dilan 5 4

  OUTPUT:
  Success add student with username dilan262

  NOTES:
   - schoolId = Id sekolah yang ingin dimasuki oleh student
   - studentName = name student
   - level = level pertama kali saat student mendaftar
   - totalCourse = jumlah course yang bisa diambil
```

#### RULES: 
  - Attribut `username` didapatkan dengan format sebagai berikut `<name> + <3 Angka Random dari 0-9>` example: `dilan262`
  - Attribut `stage` didapatkan dengan format sebagai berikut:
    - Apabila `level` yang diinput >= 14, maka `stage` menjadi `master`
    - Apabila `level` yang diinput >= 10, maka `stage` menjadi `advanced`
    - Apabila `level` yang diinput >= 7, maka `stage` menjadi `intermediate`
    - Apabila `level` yang diinput >= 4, maka `stage` menjadi `pre-intermediate`
    - Apabila `level` yang diinput >= 1, maka `stage` menjadi `beginner`
  - Setiap `student` yang terdaftar pada satu `school`, maka `school` tersebut akan mendapatkan atau bertambah `revenue` atau pemasukannya dengan rumus sebagai berikut: **500000 / totalCourse yang diambil**. Apabila `student` saat mendaftar mengambil 5 `totalCourse` maka attribut `revenue` dari `schools` akan bertambah `2500000`
  - Validasi untuk mengecek `schoolId` dan semua jenis error WAJIB untuk di handle.



## RELEASE 1
#### Take Course
Pada feature ini kamu diminta untuk membuat sistem pengambilan course pada `student`.

```javascript
  COMMAND:
  node index.js "take course" <username's student>

  EXAMPLE:
  node index.js "take course" dilan262

  OUTPUT:
  success update student with username dilan262
```

#### RULES: 
- Validasi apakah `username` yang di input terdapat dalam database atau tidak.
- Saat dijalankan maka attribut `totalCourse` pada `student` akan berkurang sebanyak 1
- Saat dijalankan maka attribut `level` pada `student` akan bertambah sebanyak 1.
- Saat dijalankan maka attribut `stage` pada `student` harus dicek kembali apakah berubah atau tidak sesuai dengan `level` student yg sudah ditambah dengan ketentuan seperti **Release Sebelumnya**.
- Validasi apabila `totalCourse` pada `Student` sudah 0 maka tampilkan pesan error `"You are not allowed to take more course"` dan perubahan attribut pada `student` juga gagal.


## RELEASE 2
#### Graduates
Pada feature ini kamu diminta untuk menghilangkan data `student` dari database yang sudah tidak memiliki `totalCourse` lagi atau bernilai 0 pada suatu sekolah.

```javascript
  COMMAND:
  node index.js graduates <schoolId>

  EXAMPLE:
  node index.js graduates 1

  OUTPUT:
  Total graduates Student in Hogwarts: 2
```

#### RULES: 
- Format Output: `Total graduates Student in <schoolName>: <totalDeletedStudents>`
- Semua `student` yang sudah tidak memiliki `totalCourse` atau bernilai 0 harus didelete pada `sekolah` tersebut.
- **Pada release ini maksimum method Model yang digunakan adalah 2.**

## Release Rocket
#### List
Pada feature ini kamu diminta untuk menampilkan data `schools` beserta `students` yang mendaftar.
```javascript
  COMMAND:
  node index.js list

  OUTPUT:
  LIST SCHOOLS
  ====================================
  Hogwarts Student List:
  1. dilan: pre-intermediate stage
  2. dilan: pre-intermediate stage
  ====================================
  Berlin School Student List:
  1. andro: advanced stage
  ====================================
  Woll Street Student List:
  1. andro: pre-intermediate stage
  ====================================
  Gutee Student List:
  Oops, Gutee doesn't have students yet
  ====================================
```

#### RULES: 
- Format Output untuk release ini adalah:
  ```
  LIST SCHOOLS
  ====================================
  <School Name> Student List:
  <idx>. <studentName>: <student's level> stage
   ====================================
  ```
- Apabila terdapat sekolah yang tidak memiliki satu `student`, maka tampilkan `Oops, <schoolName> doesn't have students yet`.
- **Untuk method sqlite3 yang digunakan wajib menggunakan `db.each` atau `statement.each`.**