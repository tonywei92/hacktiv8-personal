Title : MVC, Sequelize, Postgre

Summary : 

Ada 2 model bernama Menu dan Store, keduanya tidak memiliki relasi sama sekali. Migration dan Seed file `telah` disediakan, jadi tinggal konfigurasi koneksi database dan dipakai saja tidak perlu membuat dari awal lagi. Untuk migration dan seed nya tidak boleh dirubah.

Nantinya code km akan dijalankan menggunakan command ini : 

node index.js store list
node index.js store add [name] [city] [country] [rating] 
node index.js store update [id] [column] [value]
node index.js store delete [id]
node index.js menu contain_milk
node index.js menu cheap_without_milk
node index.js menu top_2_expensive

Skeleton nya sudah disediakan di `index.js`.


## Release 0 CRUD Store 
Berdasarkan skeleton yang sudah diberikan, buatlah fitur untuk CRUD Store, berdasarkan struktur MVC 

## Release 1 Search Data Menu
Berdasarkan skeleton yang sudah diberikan, buatlah fitur search dengan kriteria sebagai berikut : 
1. command : node index.js menu contain_milk
tampilkan semua menu yang mengandung kata 'milk'. Total menu yang ditampilkan berjumlah 9

2. command : cheap_without_milk
tampilkan semua menu yang tidak mengandung kata 'milk' dan harga nya di bawah atau sama dengan 30000. Total menu yang ditampilkan berjumlah 1

3. command : top_2_expensive
tampilkan 2 menu yang harga nya paling mahal