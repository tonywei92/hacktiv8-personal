# QUERY 

## ⏰ Time Estimation: +- 20 minutes

## Rules
- Silahkan gunakan database yang disediakan bersamaan dengan soal.
- Boleh mengirimkan jawaban melalui file `.md` ( example.md) atau menggunakan file `js` (example.js). 
- Hanya mengirimkan querynya tanpa harus menggunakan library `sqlite3` nodejs.

## Relase 0

Tampilkan semua kelas yang diadakan di hari Jumat (Friday). Satu kelas hanya boleh ditampilkan satu kali.

 **Ilustrasi hasil data**

| Name           |
| -------------- |
| Bahasa Jawa    |
| Bahasa Jepang  |
| Bahasa Arab    |
| Matematika     |
| Bahasa Inggris |

## Relase 1

Tampilkan nama student, nama class dan jadwal kelas, pada setiap `students` yang mengikuti kelas Bahasa Korea dan di huruf ketiga namanya adalah huruf `m`.

**Ilustrasi hasil data**

| Student Name | Class Name   | Schedule |
| ------------ | ------------ | -------- |
| Dimas        | Bahasa Korea | Monday   |
| Damar        | Bahasa Korea | Monday   |


## Release 2

Tampilkan setiap jadwal, nama kelas dan jumlah `students` pada class class yang memiliki jumlah `students` kurang dari 3. Diurutukan dari jumlah `students` terbanyak hingga yang tidak memiliki `students`.

**Ilustrasi hasil data**

| Name           | Schedule  | Total Student |
| -------------- | --------- | ------------- |
| Bahasa Jepang  | Thursday  | 2             |
| Bahasa Jepang  | Tuesday   | 2             |
| Bahasa Korea   | Wednesday | 1             |
| Bahasa Jepang  | Friday    | 1             |
| Bahasa Jepang  | Monday    | 1             |
| Bahasa Jepang  | Wednesday | 1             |
| Bahasa Arab    | Friday    | 1             |
| Matematika     | Friday    | 1             |
| Matematika     | Wednesday | 1             |
| Bahasa Inggris | Friday    | 1             |
| Bahasa Inggris | Monday    | 1             |
| Bahasa Inggris | Thursday  | 1             |
| Bahasa Jawa    | NULL      | 0             |

