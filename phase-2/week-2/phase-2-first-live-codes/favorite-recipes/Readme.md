# Xavier Fox - Live Code 1

Pada livecode ini, kalian diminta untuk membuat beberapa fitur (akan dijelaskan lebih detail di bawah) baik dari server maupun client.

Salah satu fitur yang dibuat, mengharuskan kalian untuk mengakses 3rd API, bacalah dokumentasi API yang diberikan dengan detail. API Documentation nya ada pada link : https://xavierlivecode1.docs.apiary.io/ .

Aplikasi client dibangun menggunakan Vue.js

Fork repo https://github.com/xavier-fox-2018/livecode1, kemudian buatlah dalam repo tersebut 2 folder, yaitu client dan server. Setelah selesai, tambahkan notes.md yang isinya .env, fitur optional yang dikerjakan, kendala, dll.

Tolong bikin akun untuk : user1@mail.com, user2@mail.com dengan password 123456 untuk membantu pengecekan instruktur.

**Notes :**
Berhubung kompetensi livecode ini bukan MVC, maka kalian diperbolehkan untuk tidak membuat controller.
apabila kalian membuat routing nya di dalam 1 file router/index.js juga diperbolehkan
File HTML telah disediakan, boleh menggunakan template ini, boleh juga menggunakan template sendiri asalkan layouting nya sama.

### Summary
* Aplikasi ini memungkinkan user untuk dapat membuat recipe, dan mendapatkan ingredients nya secara otomatis tanpa harus diinput manual menggunakan 3rd API
* User harus login terlebih dahulu untuk dapat membuat recipe, melihat recipe, show suggestion user dan show friend's favorite recipe  
* Aplikasi ini dibuat SPA (Single Page Application) DAN **harus reactive**. Apabila tidak reactive, -10 point.


## Release 1 - Authentication
**1. Server - Register (10)**  
Buatlah endpoint untuk membuat fitur register sesuai dengan spesifikasi yang terdapat pada API Documentation, perhatikan spesifikasi untuk value email dan password nya.

**2. Server - Login (7.5)**  
Buatlah endpoint untuk membuat fitur login sesuai dengan spesifikasi yang terdapat pada API Documentation.

**3. Client - Login (7.5)**  
- Buatlah fitur login di aplikasi client. Apabila user berhasil login, akan menampilkan pesan success (diusahakan tidak pakai alert), apabila user tidak berhasil login, misalnya salah email / password, akan menampilkan pesan error.
- Setelah berhasil login, maka form untuk login harus hilang, lalu muncul link / button untuk logout


## Release 2 PART 1 - Create Favorite Recipe (TANPA Ingredients)
**1. Server (5)**  
- Buatlah endpoint untuk membuat fitur create favorite recipe sesuai dengan spesifikasi yang terdapat pada API Documentation
- Perhatikan parameter apa saja yang harus dikirimkan / direspon
- Pada release ini, kamu **tidak perlu** ada ingredients dulu di response nya
- Gunakan flow yang benar untuk men-assign value dari user id nya

**2. Client (5)**
- User harus login terlebih dahulu untuk dapat mengakses fitur ini.
- Setelah berhasil login, maka  form untuk create favorite recipe akan ditampilkan.
- Apabila recipe berhasil dibuat, akan menampilkan pesan sukses "recipe XXX berhasil dibuat"


## Release 2 PART 2 - Create Favorite Recipe (DENGAN Ingredients)
**1. Server (10)**  
- Modifikasi endpoint kamu sebelumnya, sehingga ketika membuat favorite recipe baru, recipe tersebut akan memiliki ingredients secara otomatis tanpa di-input secara manual **sesuai** dengan API documentation yang diberikan
- Apabila recipe yang dibuat tidak memiliki ingredients, maka akan mengembalikan pesan error dan recipe tidak disimpan ke database

**2. Client (5)**
- Modifikasi client kamu sebelumnya, sehingga ketika recipe berhasil dibuat, maka akan menampilkan pesan : "recipe XXX berhasil dibuat, dengan ingredients : "
- Apabila **tidak** berhasil dibuat, maka akan menampilkan pesan error "recipe tidak dapat dibuat, ingredients tidak ditemukan"


## Release 3 - Show Favorite Recipe with Ingredients
**1. Server (7.5)**  
- Buatlah endpoint untuk membuat fitur recipe list sesuai dengan spesifikasi yang terdapat pada API documentation.

**2. Client (5)**
- User harus login terlebih dahulu untuk dapat melihat recipe list


## Release 4 - Show All Users (EXCEPT Logged in User)
**1. Server (7.5)**  
- Buatlah endpoint untuk membuat fitur user list sesuai dengan spesifikasi yang terdapat pada API documentation.


**2. Client (5)**
- User harus login terlebih dahulu untuk dapat melihat user list tersebut


## Release 5 - Follow User
**1. Server (10)**  
- Buatlah endpoint untuk membuat fitur follow user
- Tambahkan validasi sehingga user tidak bisa men-follow dirinya sendiri
- Apabila user men-follow dirinya sendiri, akan mengembalikan error message


**2. Client (15)**
- User harus login terlebih dahulu untuk dapat menggunakan fitur ini
- Berikan link / button "Follow" untuk setiap list user yang belum di follow
- Berikan keterangan "Followed" untuk setiap list user yang sudah di follow


## Release 6 - Optional Features
You can add optional features based on your own ideas, and relate to main features. For example, you can add features :
1. Menampilkan semua favorite resep dari user-user yang di follow
2. Buat fitur unfollow
3. Modifikasi fitur follow, setiap user men-follow user lain, maka harus di accept terlebih dahulu baru dapat di-followed.
