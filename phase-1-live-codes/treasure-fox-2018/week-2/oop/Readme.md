# **OOP (2 Jam)**

### Summary
Saat ini banyak songwriter yang memiliki karya song yang baik, biasanya seorang songwriter dapat menciptakan lebih dari 1 karya song, dan 1 song dapat dibawakan oleh 1 singer atau lebih.

### RELEASE 0
Menurut billboard, 3 top songwriters tahun 2017 adalah : J Kash, Matt Robin, Ashley Gorley. Berikut property yang dimiliki setiap songwriter tsb :

1. J Kash
  * **Name:** Jacob Kasher
  * **Birthplace:** Virginia
  * **Age:** 35
  * **Total Song Written:** 64

2. Matt Robin
  * **Name:** Mattias Larsson and Robin Fredriksson
  * **Birthplace:** Sweden
  * **Age:** 43
  * **Total Song Written:** 120
  * **Award:** Denniz Pop Grand Prize

3. Ashley Gorley
  * **Name:** Ashley Glenn Gorley
  * **Birthplace:** Kentucky, US
  * **Age:** 41
  * **Total Song Written:** 73
  * **Alumni:** Belmont University.

Buatlah class yang diperlukan dan tentukan juga keterkaitan antar class nya !


### RELEASE 1
Dan berikut adalah beberapa song yang dibuat oleh ketiga songwriter di atas dan masuk ke dalam top chart, song tersebut memiliki property sbg berikut :

lagu yang dibuat MattRobin
1. Evolve
  * **Title:** Evolve

2. Beautiful Trauma
  * **Title:** Beautiful Trauma

lagu yang dibuat oleh Ashley Gorley
1. Heartbeat
  * **Title:** Heartbeat

2. Today
  * **Title:** Today

lagu yang dibuat oleh J Kash
1. Attention
  * **Title:** Attention

Buatlah class yang diperlukan dan tentukan juga keterkaitan antar class nya !  

Setelah itu buat method untuk memasukkan song tersebut sebagai list_song songwriter seusia keterangan yang tertera di atas. Tambahkan property apabila diperlukan.

### RELEASE 2
Untuk menambah penghasilan, maka song tersebut akan di launch ke spotify. Ketika suatu song di launch ke spotify, maka :
 - total song yang dimiliki songwriter yang berada dalam spotify akan bertambah.
 - dapat diketahui apakah song berada di spotify atau tidak
 - validasi apabila ada song yang di launch BUKAN oleh songwriter nya, makan akan tampil message validasi 'Song tidak ada.'
 - apabila berhasil, akan menampilkan pesan 'Baby Shark launched on spotify !'

Buatlah method / property yang dibutuhkan untuk case ini.  

### RELEASE 3
Setelah song selesai dibuat, maka songwriter dapat menentukan song ini akan dibawakan oleh singer tertentu. Singer yang dapat membawakan song ini bisa 1 atau lebih.
  - Buatlah class Singer untuk membuat object singer yang memiliki property name, debuted_year.  
  - Buatlah sebuah method yang dapat menambah singer pada songs. Untuk setiap penambahan singer, maka akan menambahkan bonus fee songwriter sebesar 1000.
  - apabila berhasil, akan menampilkan pesan 'Singer X akan membawakan Baby Shark'

Buatlah method / property yang dibutuhkan untuk case ini.  

contoh test Case
```javascript
xxxx.addSinger([song_title], [parameter_singer])
```

### RELEASE 4
Singer juga dapat berhenti membawakan sebuah song.
  - Buatlah method yang meng handle pemberhentian singer pada sebuah song. Untuk setiap pemberhetian singer tsb, maka akan menghapus singer dari list singers dan mengurangi bonus fee songwriter sebesar 200.
  - apabila berhasil, akan menampilkan pesan 'Singer X berhenti membawakan Baby Shark'




















//
