# Callback + Promise - RNG and Gatcha Time: 45 Menit :game_die: :money_with_wings:

Disediakan sebuah class bernama RNG dengan berbagai static methods untuk melakukan proses random untuk mendapatkan hasil nilai antara 1, 2, 3, 4, atau 5. Namun, persentase untuk mendapatkan kelima angka tersebut berbeda.

# Release 0 :game_die:

Proses random dan menemukan nilai antara 1 - 5 telah dibuatkan di dalam method ``roll``. Kamu tidak perlu mengubah apapun di method ini.

Sekarang, buatlah sebuah static method di class ``RNG`` bernama ``gatchaRoll`` yang menerima dua parameter, yaitu ``times`` dan ``callback``. Di dalam function gatchaRoll, jalankan function ``RNG.roll`` berkali-kali sesuai nilai parameter times, dan dapatkan angka terbesar dari kemungkinan hasil yang ada. Proses roll ini tidak asynchronous.

Jika nilai ``times`` yang diinput adalah 0, maka anggap saja hasil roll terbesar adalah 0.

Setelah mendapatkan nilai terbesar, kemudian tunggu satu detik kemudian dan tampilkan nilai tersebut menggunakan function ``viewGachaResult``. Kamu bisa menggunakan setTimeout untuk tugas ini.

contoh penggunaan setTimeout
```javascript
setTimeout(function() {
  // jalankan sesuatu disini setelah 1 detik
}, 1000);

```

# Release 1 :money_with_wings:

Di class RNG tadi, buatlah static method baru bernama ``gatchaRollPromise`` yang hanya menerima satu parameter, yaitu ``times``. Function ini tugasnya mirip dengan gatchaRoll, tapi dia akan mereturn sebuah Promise yang kita nanti bisa gunakan.

Apabila times 0, kita akan anggap itu adalah gagal, jadi nanti akan menggunakan function ``viewGachaFailure`` untuk menampilkan pesan.

Manfaatkan test case untuk Release 1 yang telah disediakan. Coba gunakan static method ``gatchaRollPromise`` yang baru dan pastikan kamu berhasil menampilkan angka terbaik.

# Release 2 :moneybag:

Tentunya, **tidak seru** jika hanya melakukan proses ``gatchaRollPromise`` satu kali. Lakukan proses ini sebanyak 10 kali!

Silakan membuat nested Promise, tapi bonus point jika kamu memanfaatkan antara promise chaining atau ``Promise.all``! :muscle: