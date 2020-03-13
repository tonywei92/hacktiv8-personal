Kompetensi live code ini adalah : konsep OOP, mulai dari struktur class dan property nya, dan hubungan antar class (inheritance, composition, aggregation, etc).

Buat file dengan nama pertama.js. Untuk no 1 - 3 kerjakan di file ini.
Kamu diminta untuk membuat design OOP yang dapat mengakomodasi beberapa kasus di bawah ini :
1. Seorang student memiliki name, age, dan in_batch_name.
2. Sebuah bootcamp saat ini memiliki 3 batch. Batch tersebut adalah : MiracleFox, NorthernFox, dan OxfordFox. Tentukanlah 3 property apa saja yang dibutuhkan.
3. buat sebuah method 'assignStudent', yang berfungsi untuk menambahkan student kedalam batch tertentu, sehingga dalam 1 batch dapat mempunyai banyak student. Data nya adalah sbb :
a. student yang name nya 'Chandra' akan ditambahkan kedalam OxfordFox
b. student yang name nya 'Septian' akan ditambahkan kedalam MiracleFox
c. student yang name nya 'Wahib' akan ditambahkan kedalam NorthernFox
d. student yang name nya 'Fajar' akan ditambahkan kedalam NorthernFox
e. student yang name nya 'Eko' akan ditambahkan kedalam OxfordFox
f. student yang name nya 'Ghost' akan ditambahkan kedalam NorthernFox
note : pada awal pembentukan object student, in_batch_name masih kosong. namun ketika di assign ke sebuah batch, barulah in_batch_name terisi. Jika student tersebut pindah batch, maka in_batch_name juga harus berubah sesuai dengan batch yang sekarang.


4. Buat file baru bernama kedua.js, kemudian copy paste isi code yang sudah km buat di no 1 - 3. Untuk selanjutnya, kerjakan no 4 dan 5 di file kedua.js. Refactor code kalian sesuai dengan konsep OOP yang kalian ketahui.
5. Student yang bernama 'Ghost' pindah dari batch NorthernFox ke OxfordFox. Buatlah sebuah method yang dapat memindahkan seorang student dari sebuah batch ke batch lain dengan syarat :
  - tidak boleh pindah batch sebelumnya. Contoh: student dari MiracleFox boleh pindah ke NorthernFox / OxfordFox, namun student dari OxfordFox tidak boleh pindah ke MiracleFox / NorthernFox.
  Apabila syarat ini dilanggar, akan menampilkan pesan error : 'Tidak dapat pindah ke batch sebelumnya'
  - setiap student pindah, harus menyertakan alasan. Alasan tersebut harus dalam bentuk kalimat dan minimal 5 kata, DAN student hanya boleh pindah apabila dalam alasan tsb terdapat kata 'sakit' atau 'ijin' atau 'dokter.'
  Apabila syarat ini dilanggar, maka akan menampilkan pesan error : 'Tidak dapat pindah karena alasan invalid'
  - tidak boleh dipindahkan ke batch yang sama (misal pindah dri NorthernFox ke NorthernFox)
  Apabila syarat ini dilanggar, maka akan menampilkan pesan error : 'Tidak dapat pindah ke batch yang sama'
  - nama student tidak ditemukan dalam batch asalnya.
  Apabila syarat ini dilanggar, maka akan menampilkan pesan error : 'Student tidak ditemukan'

  
Gunakan contoh driver code ini :
var ghost = new Student(6, 'Ghost', '22')
northern.moveStudent(ghost, 'OxfordFox')
Hasil akhir yang diharapkan adalah sbb :
MiracleFox {
  name: 'MiracleFox',
  total: 10,
  students: [ Student { id: 2, name: 'Septian', age: '18', batch_name: 'MiracleFox' } ] }
NorthernFox {
  name: 'NorthernFox',
  total: 10,
  students:
   [ Student { id: 3, name: 'Wahib', age: '19', batch_name: 'NorthernFox' },
     Student { id: 4, name: 'Fajar', age: '20', batch_name: 'NorthernFox' } ] }
OxfordFox {
  name: 'OxfordFox',
  total: 10,
  students:
   [ Student { id: 1, name: 'Chandra', age: '17', batch_name: 'OxfordFox' },
     Student { id: 5, name: 'Eko', age: '21', batch_name: 'OxfordFox' },
     Student { id: 6, name: 'Ghost', age: '22', batch_name: 'OxfordFox' } ] }
