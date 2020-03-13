# Query Estimasi 30 menit ⏰

---

Buatlah sebuah query yang akan menghasilkan output sesuai dengan yang diinginkan oleh soal.

Illustrasi yang terdapat dalam soal ini hanya sebagai contoh bagaimana output akan terbentuk, bukan menjadi hasil utama yang akan dihasilkan dari query yang harus dibuat.

## Release 1

Tampilkan nama, umur dan cabang olahraga yang diikuti oleh setiap Athlete
termuda dari setiap negara yang mengikuti gelaran asian games diurutkan dari athlete yang paling muda hingga yang paling tua.

**Ilustrasi hasil data**

| Sport Name | Athletes Name       | Age |
| ---------- | ------------------- | --- |
| Badminton  | GAYATRI GOPICHAND   | 15  |
| Athletics  | MARSELINA TAMU APU  | 18  |
| Athletics  | DONGHWI CHOE        | 19  |
| Athletics  | PATSAPONG AMSAM ANG | 20  |


## Release 2

Tampilkan region-region yang memiliki lebih dari 2 negara pada region tersebut yang mengikuti acara asian games tersebut.

**Ilustrasi hasil data**

| Country Count | Region Name    |
| ------------- | -------------- |
| 3             | East Asia      |
| 4             | Southeast Asia |

## Release 3

Tampilkan nama presiden dan para atlit di negara indonesia atau pada negara yang tidak berada dalam region `South Asia` dan `East Asia` ( Hanya boleh menggunakan dua kondisi where dan harus menampilkan semua negara walaupun tidak ada atlit yang ikut bertanding dari negara tersebut)

**Ilustrasi hasil data**

| Presiden Name        | Region         | Athlete Name     |
| -------------------- | -------------- | ---------------- |
| Joko Widodo          | Southeast Asia | FITRIANI         |
| Joko Widodo          | Southeast Asia | JONATAN CHRISTIE |
| Lee Hsien Loong      | DONGHWI CHOE   | VERONICA SHANTI  |
| Nursultan Nazarbayev | Mid Asia       | NULL             |



