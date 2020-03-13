## ??? SYSTEM
> ⏰ Time Estimation: ~??? mins


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
- `Companies`
  - `id (INTEGER, PK, AI)`
  - `name (text)`
  - `money (INTEGER)`

- `Employee`
  - `id (INTEGER, PK, AI)`
  - `name (text)`
  - `username (VARCHAR)`
  - `kpi (INTEGER)`
  - `jobDone (INTEGER)`
  - `salary (INTEGER)`
  - `sp (INTEGER)`
  - `companyId (INTEGER, FK, REFERENCES Companies(Id))` 

## General
Applikasi ini memiliki **3 Fitur Utama**
  - Registrasi Employee: Untuk mendaftarkan satu `employee` ke satu `company`.
  - Job Done: Employee dapat mengerjakan pekerjaanya untuk meningkatkan kpi-nya.
  - Evaluation: mengevaluasi hasil pekerjaan `employee` pada suatu `company` di setiap akhir periode.

## Command
```bash
  Perintah yang perlu kamu buat adalah sebagai berikut:

  node index.js register <companyId> <employeeName> 
  node index.js "job done" <employeeName> <point>
  node index.js evaluation <companyId> <employeeUsername>

  ROCKET:
  node index.js list
```

## RELEASE 0
#### Register Employee
Pada feature ini kamu diminta untuk membuat sistem pendaftaran `employee`.
```javascript
  COMMAND:
  node index.js register <companyId> <employeeName> <salary>

  EXAMPLE:
  node index.js register 2 antonio 10000

  OUTPUT:
  Sukses mendaftakan antonio ke XYZ 100000

  EXAMPLE:
  node index.js register 20 Emilia 10000
  
  OUTPUT:
  warning: Data not found

  EXAMPLE:
  node index.js register
  
  OUTPUT:
  Silahkan isi company id dan empployee name

  NOTES:
   - companyId = Id perusahaan tempat `employee` akan bekerja
   - employeeName = name `employee`
   - salary = `salary` yang akan dibayarkan di setiap akhir bulan
```

#### RULES: 
  - Attribut `username` pada `employee` didapatkan dengan format sebagai berikut `<name> + <id>` dari data employee tersebut, example: `antonio1`
  - `kpi`, `jobDone` dan `sp` saat registrasi selalu 0
  - Validasi untuk mengecek `companyId` dan semua jenis error WAJIB untuk di handle.


## RELEASE 1
#### Job Done
Pada feature ini kamu diminta untuk membuat sistem pencatatan pekerjaan pada `Employee`.

```javascript
  COMMAND:
  node index.js "job done" <employeeName> <point>

  EXAMPLE
  node index.js "job done" asal 4 

  OUTPUT
  warning: Data not found

  EXAMPLE
  node index.js "job done" celine3 0

  OUTPUT
  point hanya boleh 1, 2, 3, atau 4

  EXAMPLE
  node index.js "job done" dion4 2

  OUTPUT
  dion complete job with current kpi rate B
```

#### RULES: 
- Validasi apakah `username` yang di input terdapat dalam database atau tidak.
- Validasikan point yang di input hanya boleh bernilai angka 1, 2, 3 atau 4
- Saat dijalankan maka attribut `kpi` pada `employee` berubah dengan ketentuan sebagai berikut:
  - jika sebelumnya `jobDone` pada `employee` bernilai 0 maka akan di isi dengan nilai point yang diinput
  - jika sebelumnya `jobDone` pada `employee` bernilai lebih dari 0 maka akan diisi dengan (`kpi` + `point`)/2
- Saat dijalankan maka attribut `jobDone` pada `employee` akan bertambah sebanyak 1
- buatlah `getter` rate pada employe untuk mentranslate `kpi` yang akan digunakan sebagai hasil output, berikut adalah ketentuannya:
  - point `4` menjadi rate `A`
  - point `3` menjadi rate `B`
  - point `2` menjadi rate `C`
  - point `1` menjadi rate `D`
  - point `0` menjadi rate `Unrated`


## RELEASE 2
#### Evaluation
Pada feature ini kamu diminta untuk mengevaluasi `employee` dalam `company` tersebut dimana ketika `kpi` karyawan tersebut dibawah `3` atau `jobDone` dibawah `5` maka akan menambahkan `sp` pada employee tersebut. Jika jumlah sp `employee` sudah mencapai 3 maka dikeluarkan dari `company` tersebut

```javascript
  COMMAND:
  node index.js evaluation <companyId> <employeeUsername>

  EXAMPLE:
  node index.js evaluation
  OUTPUT:
  warning: Silahkan memasukkan perusahaan dan username karyawan

  EXAMPLE:
  node index.js evaluation 30 yoyoyoyo
  OUTPUT:
  warning: Perusahaan ini tidak ditemukan

  EXAMPLE:
  node index.js evaluation 1 yoyoyoyo
  OUTPUT:
  warning: username tidak ditemukan
  
  EXAMPLE:
  node index.js evaluation 2 celine3
  OUTPUT:
  warning: celine tidak bekerja untuk perusahaan XYZ

  EXAMPLE:
  node index.js evaluation 1 celine3
  OUTPUT:
  celine mendapatkan sp 2

  EXAMPLE:
  node index.js evaluation 1 celine3
  OUTPUT:
  celine mendapatkan sp 3 dan dikeluarkan dari perusahaan ABC
  
  EXAMPLE:
  node index.js evaluation 2 antonio1
  OUTPUT:
  Pada periode ini antonio mendapatkan rate A
```

#### RULES: 
- Semua `employe` yang memiliki `kpi` dibawah `3` atau `jobDone` dibawah `5` maka akan mendapat surat peringatan `company` nilai property `sp` bertambah `1`  tersebut.
- Jika telah mendapat `sp` 3 maka akan di keluarkan dari `company` tersebut.

