# Race Simulation 🏎

> ⏰ Time Estimation: ~90 mins

Di challenge ini kamu akan membuat simulasi balapan berdasarkan data yang sudah diberikan di
variabel `text`. Variabel ini memiliki data `Driver` di awal text dan sisanya adalah `Speed`
mobil-nya setiap detik dalam satuan `km/h`.

## Constraints
- Dilarang menggunakan built-in function `.split`
- Dilarang menggunakan `Regular Expressions/RegEx`

## Release 0
Implementasikan function `raceSimulation` untuk mendapatkan `Driver` dan `Top Speed` berdasarkan
data yang ada di `text`

Contoh output:
```bash
Driver		:	Fujiwara Takumi
Top Speed	:	196km/h
```

## Release 1
Tambahkan `Avg Speed` (Kecepatan rata-rata) dan `Time` dari data yang telah
diberikan

Contoh output:
```bash
Driver		:	Fujiwara Takumi
Time		:	71s
Top Speed	:	196km/h
Avg Speed	:	122.25km/h
```

## Release 2
Buatlah aplikasi ini menampilkan data **setiap detik** dan *update* informasi-nya (`Top Speed`,
`Avg Speed`) secara *realtime*. Tambahkan satu lagi informasi yaitu `Current Speed` untuk
mengetahui berapa speed-nya sekarang dan akan berubah di tiap detik-nya. Jika aplikasi sudah membaca semua data-nya, tampilkan `FINISHED!`.

Contoh menampilkan data di setiap detik:  
![Release 2](race-simulation-final-release.gif "Release 2")

Catatan:  
- Telah diberikan beberapa function untuk membantu membuat aplikasi kamu menampilkan satu per 
satu informasi yang diperlukan:
  - `sleep(milliseconds)` digunakan untuk membuat *delay* sebanyak `milliseconds` yang kamu berikan
  - `clearScreen()` digunakan untuk *clear* Terminal kamu agar output tidak menumpuk ke bawah.
- Kamu diperbolehkan membuat function baru untuk mempermudah pengerjaan challenge ini
