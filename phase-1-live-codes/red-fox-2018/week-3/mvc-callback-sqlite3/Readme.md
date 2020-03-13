Topic : MVC, Callback, SQLite3
Estimation time : 100 mins

Buatlah code dalam stuktur MVC, database sqlite dan menggunakan npm sqlite3.
Task ini akan menerima input dari terminal, dengan command tertentu. **Formasi**` Command harus sama dengan yang diminta untuk memudahkan pengecekan nanti nya, detail mengenai command tsb dan ekspektasi output nya seperti apa akan dijelaskan lebih lanjut di bawah.

Disediakan file setup.js untuk membuat table, column, dan seed data nya. Jadi tinggal dijalankan saja tidak perlu dibuat lagi. Gambaran besar mengenai skema nya sbb :

Songs : id, title, released, genre <br>
Singers : id, name, origin, label, debuted_year, song_id

**SUMMARY** Command yang perlu dibuat adalah : <br>
node index.js song add [title] [released] [genre] <br>
node index.js song delete [song_id] <br>
node index.js song firstOrCreate [released] [genre] [title] <br>
node index.js singer findBy [input_column]:[input_value] <br>
node index.js singer last ATAU node index.js singer last [input_number] <br>

## DETAILS ##

1. **command** : node index.js song add [released] [genre] [title]<br>

**contoh penggunaan** : node index.js song add 2018 pop dulu kita masih SMA <br>

**output** berupa string : Data song berhasil dimasukkan dengan id 7 <br>

**keterangan** :
- ketika command dijalankan, akan menambah data song baru
- title **bisa lebih** dari 1 kata.
- angka 7 pada output adalah ID dari data yang baru saja di add, untuk mendapatkan id ini dilarang menggunakan query. pakailah method yang telah disediakan npm nya.

<br><br>

2. **command** : node index.js song delete [song_id] <br>

**contoh penggunaan** : node index.js song delete 5 <br>

**output** berupa string : Data song berhasil dihapus, 3 data singers telah di update.<br>

**keterangan** :
- ketika command dijalankan, akan menghapus data song yg id nya sesuai `inputan`
- akan meng-update semua data singers yang song_id nya sesuai `inputan`.
- Angka 3 pada output adalah jumlah data singers yang di update, angka ini **tidak** boleh didapatkan dari query, harus didapatkan dari salah 1 cara yang sudah disediakan npm sqlite3.

<br><br>

3. **command** : node index.js song firstOrCreate [released] [genre] [title]<br>

**contoh penggunaan** : node index.js song firstOrCreate 2018 pop dulu kita masih SMA <br>

**output** berupa string namun ada 2 kondisi, <br>
    kondisi pertama apabila memenuhi syarat untuk di-create : Data song berhasil dimasukkan dengan id 7 <br>
    kondisi kedua apabila tidak memenuhi syarat dan gagal create : Data song sudah ada dengan id 3. <br>

**keterangan** :
- ketika command dijalankan, akan melakukan validasi : apabila title, genre dan release sudah ada di database yang isinya sama persis, maka data baru tsb TIDAK boleh di insert lagi DAN mengembalikan id yang sesuai. Selain itu, data boleh di insert.
- title **bisa lebih** dari 1 kata.
- angka 7 pada output adalah ID dari data yang baru saja di add, untuk mendapatkan id ini dilarang menggunakan query. pakailah method yang telah disediakan npm nya.

<br><br>

4. **command** : node index.js singer findBy [input_column]:[input_value] <br>

**contoh penggunaan** : node index.js singer findBy name:michael <br>
```
**output** : [ { id: 3,
    name: 'Michael Bubble',
    origin: 'Canada',
    label: 'Reprise',
    debuted_year: 1996,
    song_id: 1 },
  { id: 6,
    name: 'Michael Jackson',
    origin: 'Indiana',
    label: 'MJJ Productions',
    debuted_year: 1958,
    song_id: 1 },
  { id: 7,
    name: 'George MiChAeL',
    origin: 'London',
    label: 'Sony',
    debuted_year: 1981,
    song_id: 3 } ]
```

**contoh penggunaan** : node index.js singer findBy id:1 <br>
```
**output** : [ { id: 1,
    name: 'Nina Simone',
    origin: 'California',
    label: 'Legacy Recordings',
    debuted_year: 1993,
    song_id: 1 } ]
```

**keterangan** :
- ketika command dijalankan, akan mencari data singers yang column nya sesuai dengan `input_column` DAN value nya **MENGANDUNG** kata `input_value` DAN mengabaikan huruf besar / kecil. Misalnya : mencari data singer yang name nya mengandung kata 'michael', akan menampilkan 3 data.
- gunakan npm method yang tepat !
<br><br>


5. **command** : node index.js singer last ATAU node index.js singer last [input_number] <br>

**contoh penggunaan** : node index.js singer last <br>
```
**output** : [ { id: 7,
    name: 'George MiChAeL',
    origin: 'London',
    label: 'Sony',
    debuted_year: 1981,
    song_id: 3 } ]
```

**contoh penggunaan** : node index.js singer last 3 <br>
```
**output** : [ { id: 7,
    name: 'George MiChAeL',
    origin: 'London',
    label: 'Sony',
    debuted_year: 1981,
    song_id: 3 },
  { id: 6,
    name: 'Michael Jackson',
    origin: 'Indiana',
    label: 'MJJ Productions',
    debuted_year: 1958,
    song_id: 1 },
  { id: 5,
    name: 'Westlife',
    origin: 'Ireland',
    label: 'Sony BMG',
    debuted_year: 1997,
    song_id: 2 } ]
```

**keterangan** :
- ketika command dijalankan, akan menampilkan data terakhir dari singer sebanyak `input_number` sesuai urutan ID nya. Apabila `input_number` kosong maka default nya adalah 1.
