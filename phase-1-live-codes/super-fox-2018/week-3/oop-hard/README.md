# RepoHub

> ⏰ Time Estimation: ~120 mins

## Manage user's repositories!
Buatlah sistem sederhana seperti **GitHub**, sebuah aplikasi yang bisa memiliki banyak **User** dan
setiap **User** bisa memiliki banyak **Repository**.

Wajib menggunakan Object-Oriented Design untuk menyelesaikan challenge ini.

## Release 0
Buatlah fitur untuk membuat **User Baru**, dimana akun tersebut akan memiliki `fullName`,
`username`, `password`, dan `repositories`.

Buat juga fitur untuk *create repository*. Setiap kali user akan membuat repository baru,
akan membutuhkan **username** dan **password**. Jadi pastikan dulu kedua data itu sesuai dengan
data milik user. Ketika ada salah satu yang tidak tepat, maka tampilkan
`'Incorrect Username/Password'`. Repository juga bisa menyimpan **jumlah commit** yang dimiliki
oleh repository tersebut.

Pikirkan terlebih dahulu, dimanakah kamu akan menyimpan data user ini? Jika butuh membuat class
baru, hubungan apakah yang akan dimiliki dengan **User**? *Aggregation* atau *Composition*?
Bagaimana dengan repository-nya?

## Release 1
*Time to upgrade the repository feature!*.

Tadi kamu sudah membuat fitur *create repository*.
Setiap repository yang kamu buat akan memiliki fitur *commit*. Ketika *commit* dilakukan, maka
jumlah commit akan bertambah 1. Perlu kamu perhatikan, setiap kali *commit* kamu **harus**
memasukkan username dan password terlebih dahulu, jika kombinasi-nya salah maka
jumlah commit tidak akan bertambah.

## Release 2
Berikutnya adalah fitur *delete repository*. Sama dengan *commit*, ketika kamu ingin menghapus
sebuah repository, harus memasukkan username dan password yang valid terlebih dahulu.


## Finished?
- Lihat lagi alur *code* kamu, apakah sudah sesuai dengan yang diminta dan sudah efisien?
- Apakah *code* kamu sudah **DRY**?
