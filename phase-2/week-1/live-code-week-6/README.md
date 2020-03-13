# Phase 2 - Live Code 1

#### WAKTU : 150 Menit / 2,5 Jam

## My Quidditch Team

Pada live code kali ini, kamu diminta untuk membuat aplikasi
menggunakan **client-server model**.

Fork repo ini, didalam repo ini terdapat 2 folder, `client`
dan `server`. Setelah selesai mengerjakan, buat pull request dengan title nama
lengkap kamu (ex: Rubhi Aulia Tirta) dan berikan comment
environment variables apa saja yang kamu gunakan dalam mengerjakan
aplikasi ini (beserta value aslinya).

**Summary:**

- Aplikasi ini memungkinkan user untuk mendapatkan pelajar yang pernah sekolah di Sekolah Sihir Hogwarts, kemudian membuat tim Quidditch-nya sendiri (Olahraga sihir yang terdiri dari 7 orang pemain)
- User harus login terlebih dahulu untuk dapat melihat list pelajar dan membuat tim impiannya.
- Aplikasi ini harus dibuat SPA (Single Page Application)
- Wajib menggunakan sequelize dan postgre sebagai db serta HTML-CSS-JQuery untuk membuat tampilan aplikasi.

**Notes:**

- Berhubung kompetensi live code ini bukan MVC, maka kamu
  diperbolehkan untuk tidak membuat controller di server. Apabila kamu
  membuat routing nya di dalam 1 file routes/index.js juga diperbolehkan.
- File template HTML telah disediakan, boleh menggunakan template ini, boleh juga
  menggunakan template sendiri asalkan layout-nya sama.
- Tidak memenuhi requirement yang terdapat pada soal mengakibatkan pengurangan nilai.
- Nama database **harus** `phase2_livecode_1`

**Rules:**

- Aplikasi ini harus SPA dan Reaktif. Apabila untuk menjalankan fitur-fitur yang terdapat pada aplikasi ini membutuhkan page refresh maka nilai akan dikurangi **10 poin**
- push ke github node_modules dan/atau .env nilai dikurangi **10 poin**
- Nama database selain `phase2_livecode_1` nilai dikurangi **10 poin**
- Tidak memberikan environment variable **beserta** valuenya  nilai dikurangi **5 poin**
- menggunakan `alert()` di sisi client nilai dikurangi **10 poin**
- Silahkan browsing (googling/stackoverflow/dokumentasi) untuk mencari solusi dari permasalahan yang kalian hadapi. Namun, **DILARANG** membuka/melihat repository/code milik sendiri maupun orang lain. Ketahuan dianggap bentuk kecurangan.
- Segala bentuk indikasi kecurangan mengakibatkan live-code tidak dinilai dan diproses sesuai aturan yang berlaku di hacktiv8 tanpa perlu konfirmasi dahulu kepada yang bersangkutan.

## **RELEASE 0 - Creating Migration, Table and Seeding.**

Jalankan migrasi dan seeder yang telah disediakan, lengkapi .gitignore dengan file/folder yang tidak ingin disertakan

## **RELEASE 1 - Authentication (Login & Register)**

### **Server - Register**
Buatlah endpoint untuk register sesuai dengan ketentuan sebagai berikut:

- route:
  - `POST /register`
- request:
  - body
    - `{ email: 'harrypotter@mail.com', password: '12345' }`
- response:
  - `201`: `{ id:1, email: 'harrypotter@mail.com', password: hashedPassword }`
  - `400`: `{ message: errorMessage }`

**Tidak perlu** membuat sisi client dari fitur ini.

### **Server - Login**

Buatlah endpoint untuk login sesuai dengan ketentuan sebagai berikut:

- route:
  - `POST /login`
- request:
  - body
    - `{ email: 'harrypotter@mail.com', password: '12345' }`
- response:
  - `200`: `{ access_token: '...' }`
  - `400`: `{ message : 'Invalid Email/Password' }`

Gunakan package JWT untuk generate access token.

### **Client - Login & Logout**

Todo:

- Buatlah fitur login & logout di client side. Apabila user tidak berhasil
  login, misalnya salah email/password, akan menampilkan pesan error (No
  `alert()`!).
- Setelah berhasil login, maka form untuk login harus hilang, lalu
  muncul link/button untuk logout, beserta list pelajar beserta tim quidditch milik user yang sedang login. Semua fitur di aplikasi ini mengharuskan user untuk login terlebih
  dahulu, jadi jika belum login tidak akan muncul konten apapun di
  halaman webnya. ^^
- Pastikan jika user sudah login dan masuk ke halaman utamanya, jika page di refresh, aplikasi akan langsung masuk ke halaman utama tanpa harus login terlebih dahulu.

## **Release 2 - Fetch students & Team Players**

### **Client - Students**

Todo :

- Tampilkan students yang kamu dapat dari server ke client (No page refresh ya!) menggunakan routing yang telah disediakan oleh soal. (Code di server sudah ada, kalian tinggal request saja ke server kalian ke route `GET /students` ^^)

### **Client - Players**

Todo :

- Tampilkan player milik team user yang sedang login di client kalian. 

### **Server - Players**

Buatlah endpoint untuk mendapatkan players sesuai dengan ketentuan sebagai berikut:

- route:
  - `GET /players`
- request
  - headers
    - `{ access_token }`
- response
  - `200`: `[{ objectPlayer }, ...]`

notes :

- Pastikan **hanya** user yang sedang login yang dapat mendapatkan data players dan hanya anggota dari team milik nya sendiri.

## **Release 3 - Add Player to My Team**

### **Server**

Buatlah endpoint untuk menambahkan player kedalam team kalian dengan ketentuan
sebagai berikut:

- route:
  - `POST /players`
- request
  - headers
    - `{ access_token }`
- body
  - `{ "name": "Harry Potter", "position": "Seeker" }`
- response
  - `200`: `{ "id": 1, "name": "Harry Potter", "position": "Seeker", "UserId": 1 }`

notes:

- Pastikan **hanya** user yang sedang login yang dapat menambahkan players ke team milik nya.

### **Client**

Todo:

- Implementasikan button `Add to Team` yang terdapat pada setiap card di list students yang berhasil kalian fetch.
- Pada saat tombol `Add to Team` di click, maka nama student yang dipilih akan dimasukkan kedalam anggota team kita sesuai dengan position yang dipilih pada menu dropdown.

## **Release 4 - Remove Player**

### **Server**

Buatlah endpoint untuk menghapus/mengeluarkan player dari team user yang sedang login dengan ketentuan sebagai berikut:

- route:
  - `DELETE /players/:id`
- request
  - headers
    - `{ access_token }`
- response:
  - `200`: `{ "message": "Successfully delete player from your team"  }`
  - `404`: `{ "message": "Player not found!" }`
  - `403`: `{ "message": "Forbidden" }`

notes : 
- Pastikan disisi server maupun client user **HANYA** bisa menghapus player dalam team nya sendiri (Authorization)

### **Client**

- Implementasikan button `Remove` yang terdapat pada setiap player yang terdapat pada team.
- Pada saat tombol `Remove` di click, maka nama student yang dipilih akan hilang dari anggota team baik dari sisi server maupun client

## **Release 5 - Connect with 3rd Party API**

Gawat! Boss kamu tidak suka dengan data dummy yang kamu gunakan pada file seeder!

kamu diminta menggunakan API dari `https://www.potterapi.com/` untuk mendapatkan list students.

- saat ini method `find` pada file StudentController yang terdapat pada folder server yang di sediakan soal mengambil data dari database local yang telah di seeding sebelumnya.
- ganti lah isi method `find` tersebut sehingga method tsb melakukan request ke 3rd Party API yang sudah di sediakan diatas.
- pastikan response yang di berikan oleh API tsb dan data yang kalian kembalikan ke client kalian **HANYA** character yang memiliki `role` sebagai `student`

## **RELEASE 6 - Validation** 🚀🚀🚀

Tambahkan validasi pada model `Player` ketika kamu menambahkan player ke team kamu sehingga
- user yang login hanya bisa memiliki maksimal 7 pemain
- tidak boleh ada pemain dengan nama yang sama dalam 1 team yang sama.
- setiap team terdiri dari maksimal:
  - 1 orang Goalkeeper
  - 2 orang Beater
  - 3 orang Chaser
  - 1 orang Seeker
  
misalkan jika dalam tim milik user sudah ada 1 goalkeeper, maka akan error ketika user ingin menambahkan 1 orang goalkeeper lagi.