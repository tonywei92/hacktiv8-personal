Topic : MVC, Callback, SQLite3
Estimation time : 100 mins

Buatlah code dalam stuktur MVC, database sqlite dan menggunakan npm sqlite3.
Task ini akan menerima input dari terminal, dengan command tertentu. **Formasi** Command harus sama dengan yang diminta untuk memudahkan pengecekan nanti nya, detail mengenai command tsb dan ekspektasi output nya seperti apa akan dijelaskan lebih lanjut di bawah.

Disediakan skeleton code di index.js untuk mengolah data process.argv nya.

Disediakan file setup.js untuk membuat table, column, dan seed data nya. Jadi tinggal dijalankan saja tidak perlu dibuat lagi. Gambaran besar mengenai skema nya sbb :

Authors : id, name, website_url, birthplace, birthyear <br>
Books : id, title, released, genre, author_id

**SUMMARY** Command yang perlu dibuat adalah : <br>

node index.js author create [website_url] [birthplace] [birthyear] [name]<br>
node index.js author delete [id]<br>
node index.js book firstOrCreate [released] [genre] [author_id] [title] <br>
node index.js author find where [column] [value] <br>
node index.js author show_all [input]

## DETAILS ##

1. **command** : node index.js author create [website_url] [birthplace] [birthyear] [name]<br>

**contoh penggunaan** : node index.js author create johndoe.com indonesia 1988 John Doe <br>

**output** berupa string : Data author berhasil dimasukkan <br>

**keterangan** :
- ketika command dijalankan, akan menambah data author baru
- name **bisa lebih** dari 1 kata.
- proses ini **HARUS** menggunakan method 'as an object with parameters'

<br><br>

2. **command** : node index.js author delete [input_id] <br>

**contoh penggunaan** : node index.js author delete 5 <br>

**output** berupa string : Data author berhasil dihapus, data books berhasil dihapus sebanyak 2 <br>

**keterangan** :
- ketika command dijalankan, akan menghapus data author sesuai dengan input_id
- hapus juga data books yang author_id nya sesuai dengan `input_id`
- angka 2 pada output adalah jumlah data book yang berhasil dihapus, dilarang menggunakan query. pakailah method yang telah disediakan npm nya.

<br><br>


3. **command** : node index.js book firstOrCreate [released] [genre] [author_id] [title] <br>

**contoh penggunaan** : node index.js book 2015 horror 8 Dr Jekyll and Mr Hyde <br>

**output** berupa string namun ada 2 kondisi, <br>
    kondisi pertama apabila memenuhi syarat untuk di-create : Data book berhasil dimasukkan. <br>
    kondisi kedua apabila tidak memenuhi syarat dan gagal create : Data author sudah ada dengan id 3. <br>

**keterangan** :
- ketika command dijalankan, akan melakukan validasi : apabila released, genre dan title sudah ada di database yang isinya sama persis, maka data baru tsb TIDAK boleh di insert lagi DAN mengembalikan id yang sesuai. Selain itu, data boleh di insert.
- title **bisa lebih** dari 1 kata.

<br><br>


4. **command** : node index.js author find where [input_column] [inputvalue] <br>

**contoh penggunaan** : node index.js author find where name ro <br>

**output** :
```
[ { id: 1,
    name: 'Brown, Dan',
    website_url: 'danbrown.com',
    birthplace: 'Exeter, New Hampshire, United States',
    birthyear: 1964 },
  { id: 2,
    name: 'Rowling, J.K.',
    website_url: 'https://www.jkrowling.com/',
    birthplace: 'Yate, United Kingdom',
    birthyear: 1965 } ]
```

**contoh penggunaan** : node index.js author find where id 1 <br>

**output** :
```
[ { id: 1,
    name: 'Brown, Dan',
    website_url: 'danbrown.com',
    birthplace: 'Exeter, New Hampshire, United States',
    birthyear: 1964 }]
```
**apabila** ada yang id nya 11 atau 14, tidak boleh ditampilkan.


**keterangan** :
- ketika command dijalankan, akan menampilkan data author yg column nya sesuai `input_column`
- apabila `input_column` adalah id, maka tampilkan yang value nya equals dengan `input_value`
- apabila `input_column` bukan id, maka tampilkan yang value nya mengandung `input_value`
<br><br>


5. **command** : node index.js author show_all [input] <br>

**contoh penggunaan** : node index.js author show_all 2 <br>
**output** :
```
[ { id: 2,
    name: 'Rowling, J.K.',
    website_url: 'https://www.jkrowling.com/',
    birthplace: 'Yate, United Kingdom',
    birthyear: 1965,
    totalBook: 3 },
  { id: 3,
    name: 'James, E. L.',
    website_url: 'https://www.eljamesauthor.com/',
    birthplace: 'London, United Kingdom',
    birthyear: 1963,
    totalBook: 2 } ]
```

**contoh penggunaan** : node index.js author show_all 3 <br>
**output** :
```
[ { id: 2,
    name: 'Rowling, J.K.',
    website_url: 'https://www.jkrowling.com/',
    birthplace: 'Yate, United Kingdom',
    birthyear: 1965,
    totalBook: 3 },
  { id: 3,
    name: 'James, E. L.',
    website_url: 'https://www.eljamesauthor.com/',
    birthplace: 'London, United Kingdom',
    birthyear: 1963,
    totalBook: 2 },
  { id: 4,
    name: 'Meyer, Stephenie',
    website_url: 'https://stepheniemeyer.com/',
    birthplace: 'Hartford, Connecticut, United States',
    birthyear: 1973,
    totalBook: 2 } ]
```

**keterangan** :
- ketika command dijalankan, akan menampilkan data authors beserta jumlah book nya sebanyak `input` dan diurutkan berdasarkan jumlah book terbanyak. Apabila `input` kosong maka tampilkan semua data nya.
