Title : MVC, Sequelize, Postgre
Estimasi : 1 jam 

Summary : 
Ada 2 model bernama Menu dan Store, keduanya tidak memiliki relasi sama sekali. Migration dan Seed file `telah` disediakan, jadi tinggal konfigurasi koneksi database dan dipakai saja tidak perlu membuat dari awal lagi. Untuk migration dan seed nya tidak boleh dirubah.

Nantinya code km akan dijalankan menggunakan command ini : 

node index.js store list <br />
node index.js store add [name] [city] [country] [rating]  <br />
node index.js store update [id] [column] [value] <br />
node index.js store delete [id] <br />
node index.js menu contain_milk <br />
node index.js menu cheap_without_milk <br />
node index.js menu top_2_expensive <br />

Skeleton nya sudah disediakan di `index.js`.


## Release 0 CRUD Store 
Berdasarkan skeleton yang sudah diberikan, buatlah fitur untuk CRUD Store, berdasarkan struktur MVC 

## Release 1 Search Data Menu
Berdasarkan skeleton yang sudah diberikan, buatlah fitur search dengan kriteria sebagai berikut : 
1. command : node index.js menu contain_milk <br />
tampilkan semua menu yang mengandung kata 'milk'. Total menu yang ditampilkan berjumlah 9

2. command : node index.js menu cheap_without_milk <br />
tampilkan semua menu yang tidak mengandung kata 'milk' dan harga nya di bawah atau sama dengan 30000. Total menu yang ditampilkan berjumlah 1

3. command : node index.js menu top_2_expensive <br />
tampilkan 2 menu yang harga nya paling mahal
