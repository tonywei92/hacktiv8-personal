# Eager Fox - Live Code 1

Pada live code kali ini, kamu diminta untuk membuat aplikasi
menggunakan client-server model.

Untuk membuat aplikasi ini mengharuskan kamu untuk mengakses 3rd party
API, bacalah dokumentasi API yang diberikan dengan detail. API
Documentation nya ada pada link [berikut](https://www.potterapi.com/).

Fork repo ini, kemudian buatlah 2 folder dalam repo tersebut, `client`
dan `server`. Setelah selesai mengerjakan, buat pull request dengan title nama
lengkap kamu (ex: Dimitri Wahyudiputra) dan berikan comment
environment variables apa saja yang kamu gunakan dalam mengerjakan
aplikasi ini (beserta value aslinya).

### Summary

- Aplikasi ini memungkinkan user untuk mendapatkan list students yang bersekolah di Hogwarts dan memilih student untuk dimasukkan kedalam tim quidditch 'Hogwarts All-Star'
- User harus login terlebih dahulu untuk dapat melihat konten aplikasi (list student dan team players)
- Aplikasi ini dibuat SPA (Single Page Application) DAN **harus
  reactive**. Apabila tidak reactive, -10 point.

**Notes:**

- Berhubung kompetensi live code ini bukan MVC, maka kamu
  diperbolehkan untuk tidak membuat controller di server. Apabila kamu
  membuat routing nya di dalam 1 file routes/index.js juga diperbolehkan.
- File HTML telah disediakan, boleh menggunakan template ini, boleh juga
  menggunakan template sendiri asalkan layout-nya sama.
- Nama database **harus** `eager_fox_live_code_1`

## Release 1 - Authentication

### Server - Register (10)

Buatlah endpoint untuk register dengan ketentuan sebagai berikut:

- route:
  - `POST /register`
- request:
  - body:
    - `{ email: 'dimitri@mail.com', password: 'secret' }`
- response:
  - `201`: `{ _id: ObjectId(''), email: 'dimitri@mail.com', password: 'HashedPassword' }`

Email bersifat unique, jadi tidak boleh ada email yang sama
di dalam database.

Untuk melakukan hash terhadap password, kamu diperbolehkan menggunakan
package apa saja. **TIDAK PERLU** mengimplementasikan fitur ini di
_client-side_.

### Server - Login (7.5)

Buatlah endpoint untuk login sesuai dengan ketentuan sebagai berikut:

- route:
  - `POST /login`
- request:
  - body
    - `{ email: 'dimitri@mail.com', password: 'secret' }`
- response:
  - `200`: `{ access_token: '...' }`

Gunakan package JWT untuk generate access token.

### Client - Login (7.5)

Todo:

- Buatlah fitur login di client side. Apabila user tidak berhasil
  login, misalnya salah email/password, akan menampilkan pesan error (No
  `alert()`!).
- Setelah berhasil login, maka form untuk login harus hilang, lalu
  muncul link/ button untuk logout.
- Semua fitur di aplikasi ini mengharuskan user untuk login terlebih
  dahulu, jadi jika belum login tidak akan muncul konten apapun di
  halaman webnya. ^^

## Release 2 - Fetch Students (20)

### Client

Tampilkan `characters` dengan **role** `student` yang kamu dapat dari 3rd party API ke client. Tampilkan informasi `name` dan `house` dari masing-masing character.

## Release 3 - Add Player to Team Member(35)

### Server

Buat endpoint untuk menyimpan player yang dipilih user dengan ketentuan
sebagai berikut:

- route:

  - `POST /players`

- request

  - body

    ```javascripts
    {
    	name : <nama student>,
    	house : <nama house>,
    	position : <"goalkeeper" atau "chaser" atau "beater" atau "seeker">
    }
    ```

    

  - headers

    - `{ access_token }`

- response success

  - `201`: `{ _id: ObjectId(''), name, house, position }`

- validation

  - max jumlah player dalam satu team adalah 7
  - max player dengan position `goalkeeper` adalah 1
  - max player dengan position `chaser` adalah 3
  - max player dengan position `beater` adalah 2
  - max player dengan position `seeker` adalah 1
  - 1 orang hanya bisa mengisi satu position

### Client

Todo:

- Implementasikan select student dan button - button untuk menambahkan student yang kamu
  dapatkan dari 3rd party API.
- Tampilkan semua player milik user yang sedang login. 
- Tampilkan error jika ketika kalian menekan tombol goalkeeper/chaser/beater/seeker namun kalian belum memilih student.

## Release 4 - Remove Player from Team (20)

### Server

Buat endpoint untuk menghapus/mengeluarkan student dari team milik user dengan ketentuan
sebagai berikut:

- route:
  - `DELETE /players/:playerId`
- request
  - headers
    - `{ access_token }`
- response
  - `200`: `{ _id: ObjectId('') }`

**Note**: Pastikan user **tidak bisa** menghapus player milik user lain.
Silakan tulis logicnya di middleware.

### Client

Implementasikan button `Remove` pada setiap player yang terdapat pada team.