# RUMAH SAKIT

Implementasikanlah applikasi rumah sakit sederhana yang dapat menampung banyak pasien.
Jenis pasien yang ada yaitu pasien BPJS dan pasien Asuransi. Kamu diminta untuk menghitung invoice setiap
pasien yang telah selesai dirawat di rumah sakit tersebut.

Berikut requirement dari rumah sakit ini:

1. Setiap Pasien (BPJS maupun Asuransi) memiliki attribute:
    - name
    - age
    - gender
    - typePatient
    - budgetMax (budget yang dicover. Untuk BPJS sebesar 2000000; Untuk Asuransi sebesar 5500000)
    - diagnosis
    - totalDayTreatment (sudah berapa hari dirawat)
    - room (kamar yang dipilih oleh pasien saat checkIn)
    - isCheckOut (pasien sudah checkout atau belum)

2. Total hari untuk masing-masing diagnosis penyakit adalah:
    - Diare, dengan total perawatan yang dibutuhkan 2 hari
    - Muntaber, dengan total perawatan yang dibutuhkan 3 hari
    - Demam Berdarah, dengan total perawatan yang dibutuhkan 4 hari
    - Tipes, dengan total perawatan yang dibutuhkan 7 hari
    - Selain diagnosis diatas total perawatan yang dibutuhkan hanya 1 hari

3. Rumah sakit hanya memiliki 3 jenis room yaitu VIP, kelas 1 dan kelas 2

4. Patient BPJS maksimal dapat memilih room kelas 1

5. Daftar Harga room per hari adalah:
   - VIP sebesar 1500000 per hari
   - Kelas 1 sebesar 750000 per hari
   - Kelas 2 sebesar 350000 per hari


## RELEASE 0
Implementasikan Class Rumah Sakit dan Class Patient (Tentukan Inheritance dan Composition jika ada)

## RELEASE 1
Buatlah method checkIn yang berfungsi untuk menginput nama, umur, gender, tipe pasien, diagnosis, pilihan room

Jika tipe pasien BPJS ingin memilih tipe room VIP maka munculkan pesan 'Mohon maaf anda layanan kamar ini tidak tersedia'

Jika pasien berhasil terdaftar di rumah sakit tersebut maka munculkan pesan 'Pasien telah terdaftar'.

Pastikan data pasien telah terdaftar pada rumah sakit

## RELEASE 2
Buatlah method showPatient yang berfungsi untuk menampilkan list nama pasien siapa saja yang masih di rawat, sakit apa dan total hari perawatan

Example:
```
LIST PASIEN:
1. Gea (tipes hari ke 5)
```

### RELEASE 3
Buatlah method nextDay yang berfungsi untuk mengecek dan menampilkan invoice(jika ada) pasien yang telah melewati masa perawatan.

Example:
Dia seorang pasien bpjs yang diagnosa penyakitnya adalah muntaber. Dia memilih untuk dirawat di room Kelas 1

jika method nextDay di panggil sebanyak 4 kali (perawatan muntaber 3 hari, asumsi hari ke 4 invoice keluar dan pasien sudah harus keluar dari rumah sakit)
maka muncul Invoice untuk Dia. Berikut ekspektasi invoice yang diinginkan

```
**************************INVOICE****************************
Pasien:
 Nama: Dia
 Umur: 17
 Diagnosa: muntaber
 telah menjalani perawatan selama 3 hari.
Total Pembayaran sebesar Rp 2250000
 Pihak bpjs telah meng-cover sebesar Rp 2000000.
 Biaya administrasi yang harus dibayarkan sebesar Rp 250000
*************************************************************
```

Pastikan setelah invoice tercetak/tampil, pasien tersebut tidak terdaftar lagi menjadi pasien di rumah sakit tersebut.
