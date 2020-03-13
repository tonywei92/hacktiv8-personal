Topic : MVC, Callback, SQLite3
Estimation time : 60 mins

Task ini akan menerima input dari terminal, dengan command tertentu. `Formasi` Command harus sama dengan yang diminta untuk memudahkan pengecekan nanti nya, detail mengenai command tsb dan ekspektasi output nya seperti apa akan dijelaskan lebih lanjut di bawah.

Disediakan file setup.js untuk membuat table, column, dan seed data nya. Jadi tinggal dijalankan saja tidak perlu dibuat lagi. Gambaran besar mengenai skema nya sbb :

Contacts : id, name, company, phone, email
Addresses: id, street, city, zip_code, contact_id

Berikut adalah detail command yang perlu dibuat :

1. **command** : node index.js contact add [name] [phone] [email] [company] <br>

**keterangan** :
- ketika command dijalankan, akan menambah data contact baru
- nama company bisa lebih dari 1 kata.
- angka 1 pada output adalah ID dari data yang baru saja di add, untuk mendapatkan id ini dilarang menggunakan query. pakailah method yang telah disediakan npm nya.

**contoh penggunaan** : node index.js contact add ryan 123456789 ryan@example.com hacktivate teknologi indonesia <br>
**output** berupa string : Data baru berhasil dimasukkan dengan id 1 <br>

<br><br>
2. **modifikasi** code nomor 1 (contact add), tambahkan validasi nama email harus unik tanpa merubah struktur database ! apabila contact yang di add, email nya sudah ada di database, maka harus menampilkan error berupa string : 'Email sudah ada di database' DAN data tidak boleh tersimpan di database.

<br><br>
3. **command** : node index.js address findBy [input_column] [input_value] <br>

**keterangan** :
- ketika command dijalankan, akan mencari data address yang column nya sesuai dengan `input_column` DAN value nya mengandung kata `input_value`. Misalnya : mencari data yang city nya mengandung kata jakarta
- gunakan npm method yang mengembalikan hasil pertama

**contoh penggunaan** : node index.js address findBy city jakarta <br>
**output** : { id: 3,
  street: 'jl. iskandar muda 9 ',
  city: 'dki jakarta',
  zip_code: '9898',
  contact_id: 2 }

**contoh penggunaan** : node index.js address findBy contact_id 1 <br>
**output** berupa object : { id: 1,
  street: 'jl.dago 1',
  city: 'bandung',
  zip_code: '1212',
  contact_id: 1 }


<br><br>
4. **command** : node index.js address update [input_column1] [input_value1] condition [input_column2] [input_value2]
**keterangan** :
- ketika command dijalankan, akan mengupdate data `address` pada column `column1` dengan value `value1` YANG memiliki kondisi column `input_column2 sama dengan `input_value2`
- misalnya : saya mau meng-update semua data address pada column `city` menjadi `DKI_JAKARTA` YANG memiliki kondisi `city` nya mengandung kata `jakarta`
- angka 3 pada output harus didapatkan dari metode yang disediakan npm, tidak boleh menggunakan query. <br>

**contoh** : node index.js address update city DKI_JAKARTA condition city jakarta<br>
**output** berupa string : Data berhasil dirubah : 3 rows.


<br><br>
5. **command** : node index.js address delete [input_value] <br>
**keterangan** :
- ketika command dijalankan, akan menghapus data `address` yang id nya `input_value`
- 1 Contact harus memiliki setidaknya 1 address. Misalnya : contact Vanessa memiliki 2 address, yaitu : `jl. iskandar muda 9` (id nya : 3) dan `jl. gandaria 7` (id nya 4).
Maka, ketika alamat `jl. iskandar muda 9` dihapus akan berhasil. Namun setelahnya, ketika dihapus lagi alamat `jl. gandaria 7`, harus ada validasi yang akan menampilkan pesan : Alamat tidak dapat dihapus, contact harus memiliki minimal 1 alamat.<br>

**contoh** : node index.js delete address 3<br>
**output** berupa string : Alamat Vanesa di jl. iskandar muda 9 telah dihapus

**contoh** : node index.js delete address 4<br>
**output** berupa string : Alamat tidak dapat dihapus, contact harus memiliki minimal 1 alamat.
