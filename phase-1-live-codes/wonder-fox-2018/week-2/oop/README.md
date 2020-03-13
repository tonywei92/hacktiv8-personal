# Hacktiv HR

## Summary

Hacktiv8 adalah sebuah perusahaan yang mempunyai mimpi untuk mencetak programmer
programmer handal di Indonesia melalui program bootcamp yang dilaksanakan selama
3 bulan. Seiring dengan berjalannya waktu dan berkembangnya perusahaan ini,
Hacktiv8 membutuhkan sebuah aplikasi yang dapat me-manage human resource yang
terdapat dalam perusahaan tersebut. Tugas kalian adalah membuat aplikasi
dengan ketentuan sebagai berikut.

## Release 0

Terdapat 3 tipe user yang dapat di-input ke dalam aplikasi HR ini. Ketiga tipe
tersebut adalah:

- Manager
- Instructor
- Student

Semua tipe user yang terdaftar pada aplikasi ini akan memiliki `properties` sebagi
berikut:

- `id`
- `name`
- `age`
- `address`
- `gender`

Untuk user bertipe `Manager` atau `Instructor` memiliki satu data tambahan yaitu
data `salary` yang akan menyimpan data gaji yang akan diterima oleh orang tersebut.

Sedangkan untuk user bertipe `Student` memiliki satu data tambahan yaitu `phase`
yang akan menyimpan informasi student tersebut sedang berada pada phase berapa.

Buatlah class-class yang diperlukan!

## Release 1

Setiap orang di Hacktiv8 akan memiliki method `greet` yang akan menampilkan
`"Halo! Saya salah satu member Hacktiv8!"`.

Method ini akan mengeluarkan output yang sedikit berbeda pada setiap tipe,
dengan aturan sebagai berikut:  

Jika `Instructor` memanggil method `greet`, maka
akan menampilkan:  
```
"Halo! Saya salah satu member Hacktiv8!"
"Saya adalah seorang instruktur!"
```

Jika `Student` memanggil method `greet`, maka akan menampilkan:  
```
"Halo! Saya salah satu member Hacktiv8!"
"Saya sedang belajar programming disini!"
```

Jika `Manager` memanggil method `greet`, maka akan menampilkan:  
```
"Halo! Saya salah satu member Hacktiv8!"
"Saya adalah seorang manager!"
```

## Release 2

Buatlah class `Company` yang akan digunakan untuk  menyimpan dan mengambil data
data yang berhubungan dengan perusahaan tersebut yang didalamnya memiliki data.

- `companyName` -> Nama perusahaan
- `limit` -> Batas Maksimal jumlah user/pengguna/orang dari perusahaan tersebut
- `people` -> Orang yang terdaftar dalam perusahaan tersebut
- `loggedInUser` -> User yang sedang login dalam sistem tersebut

Buatlah sebuah perusahaan baru dengan data data sebagai berikut:

- **companyName** -> Hacktiv8
- **limit** -> 10
- **loggedInUser** -> NULL
- **people**
  - **Manager**
    - **id** -> 1
    - **name** -> John Kosasih
    - **age** -> 15
    - **address** -> Mars
    - **gender** -> Male
    - **salary** -> 100
  - **Instructor**
    - **id** -> 2
    - **name** -> Marry Kosasih
    - **age** -> 16
    - **address** -> pluto
    - **gender** -> Female
    - **salary** -> 200
  - **Instructor**
    - **id** -> 3
    - **name** -> Kirry Kosasih
    - **age** -> 17
    - **address** -> Saturnus
    - **gender** -> Male
    - **salary** -> 300
  - **Student**
    - **id** -> 4
    - **name** -> Kurry Kosasih
    - **age** -> 27
    - **address** -> Pluto
    - **gender** -> Male
    - **phase** -> 1

## Release 2

Dalam sebuah perusahaan tersebut terdapat berbagai fitur yang bisa digunakan,
fitur fitur tersebut adalah:

- **Login**  
  Fitur untuk masuk ke dalam aplikasi kita.  

  **Aturan**
  - Hanya orang yang sudah terdaftar pada company tersebut yang dapat login
    menuju sistem.
  - Setelah user berhasil login maka sistem harus menyimpan data user yang
    berhasil login tersebut di `loggedInUser`.

  ```javascript
   const hacktiv8 = new Company(...)

   hacktiv8.login("Marry Kosasih") // "Welcome, Marry Kosasih!"

   hacktiv8.login("anonymous") // "You're not a member of Hacktiv8!"
  ```

- **Show All Salary**  
  Fitur ini dapat menampilkan data salary seluruh user yang terdaftar pada
  perusahaan tersebut. Fitur ini hanya bisa di akses jika user yang sedang login
  memiliki akses **Manager**.

  ```javascript
    const hacktiv8 = new Company(...)

    // Contoh login sebagai instructor
    hacktiv8.login("Marry Kosasih")
    hacktiv8.showSalaries() 
    // "You don't have permission to access this feature!"

    // Contoh login sebagai manager
    hacktiv8.login("John Kosasih")
    hacktiv8.showSalaries()
    // Name: John Kosasih, Salary: 100
    // Name: Marry Kosasih, Salary: 200
    // Name: Kirry Kosasih, Salary: 300
  ```

- **Show My Salary**  
  Fitur ini berguna untuk menampilkan salary user yang sedang
  login pada sistem kita. Keluarkan juga pesan error ketika user yang tidak
  memiliki salary ingin mengakses fitur ini.

  ```javascript
  hacktiv8.login("John Kosasih")
  hacktiv8.mySalary // "Your salary is 200"


  hacktiv8.login("Kurry Kosasih")
  hacktiv8.mySalary // "You don't have a salary yet"
  ```

- **Add More Users**  
  Buatlah sebuah fitur untuk menambahkah user baru pada perusahaan tersebut.  
  
  **Aturan**
    - Fitur ini hanya bisa diakses jika yang sedang login bertipe Manager (
      tampilkan pesan error jika user yang sedang login bukan merupakan manager)
    - Kita hanya bisa menambahkan karyawan baru jika jumlah karyawan belum
      memenuhi limit ( tampilkan pesan error jika sudah melebihi batas jumlah
      user )
    - id user baru harus AUTO INCREMENT, tidak di-input manual

## Release 3

Buat method untuk menampilkan seluruh orang pada perusahaan tersebut, di-kelompokkan berdasarkan
tipe.

```javascript
hacktiv8.showPeople()

/*
{
  Instructors: [
      Instructor { id: 2, name: 'Marry Kosasih', ... },
      Instructor { id: 3, name: 'Kirry Kosasih', ... }
  ],
  Managers: [
      Manager { id: 1, name: 'John Kosasih', ... }
  ],
  Students: [
      Student { id: 4, name: 'Kurry Kosasih', ... }
  ]
}
*/
```
