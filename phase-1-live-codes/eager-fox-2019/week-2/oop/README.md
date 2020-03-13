# Tasker

## Summary

Tasker adalah aplikasi untuk mencatat suatu pekerjaan. 
Dengan aplikasi ini penguna dapat mencatat pekerjaan yang harus ia kerjakan atau 
mendistribusikan pekerjaan itu kepada orang lain. Buatlah aplikasi tersebut dengan 
ketentuan sebagai berikut.

## Release 0

Buatlah class `System` untuk menjalankan program ini, dimana memiliki `properties` sebagai berikut.

- Users -> Kumpulan object dari class `user`
- Tasks -> Kumpulan object dari class `task` sesuai tipenya

property `users` dan `tasks` tidak boleh langsung di ubah atau di akses dari luar, maka buatlah getter agar `properties` tersebut dapat langsung diakses.

Terdapat 3 tipe task yang dapat dibuat di aplikasi ini. Ketiga tipe
tersebut adalah:
- Daily
- OneTime
- Periodic

Semua tipe task yang terdaftar pada aplikasi ini akan memiliki `properties` sebagi
berikut:

- `id` -> nomor harus unik, validasikan
- `name`
- `type` -> jenis task yang di buat dapat berisi `Daily`, `OneTime` atau `Periodic`
- `desc`
- `startDate` -> format YYYY-MM-DD example : 2019-02-10, tidak perlu di validasi
- `completeDate` -> format YYYY-MM-DD example : 2019-02-10, tidak perlu di validasi
- `creator` -> object `User`

Untuk task bertipe `OneTime` dan `Periodic` memiliki satu `property` tambahan yaitu
`duration` yang akan menyimpan informasi lama waktu pekerjaan yang dibolehkan dalam satuan hari.

Buatlah class `User` yang akan digunakan untuk mewakili pengguna sistem ini, class tersebut memiliki `properties` sebagai berikut.

- `firstName`
- `lastName` 
- `email` -> Alamat email user, harus unik validasikan
  
Berdasarkan kriteria diatas buatlah class-class yang diperlukan!

## Release 1

System memiliki method `createUser` parameter-parameter berikut:
- firstName -> String nama depan user yang ingin dibuat
- lastName -> String nama belakang user yang ingin dibuat
- email -> String email user yang ingin dibuat

Method ini akan membuat object `User`, menambahkan ke dalam properties 
`users`, mengebalikan object `User`, serta menampilkan pesan berikut.

`User ${firstName} ${lastName} berhasil di buat` 


## Release 2

System memiliki method `createTask`  menerima beberapa parameter-parameter berikut:
- user -> Object user yang membuat task
- type -> String type task yang akan dibuat
- taskId -> Integer id task yang akan dibuat
- title -> String title task yang akan dibuat
- desc -> String deskripsi task yang akan dibuat

Untuk beberapa jenis task berjenis periodic menerima parameter berikut:
- duration -> Integer jangka waktu pengerjaan yang diperbolehkan dalam satuan hari

Method ini akan membuat object `Task`, dan menambahkanya kedalam properties `tasks` 

## Release 3

Setiap task akan memiliki method `afterCreate` yang akan menampilkan
`Task ${idTask}. ${namaTask} Berhasil  dibuat`.

Method ini akan dijalankan setelah object `Task` dibuat dan mengeluarkan output yang sedikit berbeda sesuai tipe `Task` yang dibuat,
dengan aturan sebagai berikut:  

Untuk tipe `OneTime` dan `Periodic`, Method ini akan mengeluarkan output yang sedikit berbeda seperti berikut:  
```
"Task '1. Absen' Berhasil  dibuat"
"Silahkan dikerjakan dalam jangka waktu ${duration} hari"
```

## Release 4
buatlah getter `tasks` pada system untuk menampilkan daftar task yang telah dibuat berdasarkan jenis task-nya

buatlah method `getTaskById` pada system yang menerima id task yang dicari dan mengembalikan object task tersebut

buatlah method `setCompleteTask` pada system yang meneria parameter id task dan tanggal selesai pengerjaan

## Release 5

System memiliki method `getCreatedByEmail` menerima email user dan mengeluarkan kumpulan data object `Task` yang di buat oleh user tersebut


