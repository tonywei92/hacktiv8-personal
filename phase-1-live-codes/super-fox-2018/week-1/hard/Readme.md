# HARD - HACKTIV8 Lecture Schedule Generator

## Description
Buatlah sebuah function yang menghasilkan jadwal lecture fase-1 selama (n) minggu secara otomatis bagi semua instruktur:
  - `Rifki`, `Windi`, `Dimitri`

dengan syarat sebagai berikut:

```javascript
/**
* @instructorName {Array} list nama instruktur
* @weekCount {Number} jumlah minggu yang ingin di tampilkan
*/

function generateSchedule(instructorNames, weekCount){
  // masukan kode kamu disini
}

let instructorNames = ['Rifki', 'Windi', 'Dimtri']
generateSchedule(instructorNames, 2)
```


### Release 0
- Tampilkan list week dan harir (Hari aktif mengajar adalah senin-jum'at)
- Tampilkan instruktur yang mengajar di hari itu (maksimal 2 orang)

### Release 1  
Setiap instruktur maksimal mengajar 2 hari berturut2, contoh: Rifki bisa mengajar `senin-selasa` tapi tidak bisa `senin-selasa-rabu`

### Release 2
Setiap hari harus ada 2 orang yang mengajar (tidak boleh 1 orang)

## Expectation

```javascript
let instructorNames = ['Rifki', 'Windi', 'Dimtri']
generateSchedule(instructorNames, 3)
```

```javascript
Week 1 - Senin: Rifki,Windi
Week 1 - Selasa: Rifki,Dimitri
Week 1 - Rabu: Windi,Dimitri
Week 1 - Kamis: Rifki,Windi
Week 1 - Jumat: Rifki,Dimitri
Week 1 - Sabtu: Libur
Week 1 - Minggu: Libur

----------------------

Week 2 - Senin: Rifki,Windi
Week 2 - Selasa: Rifki,Dimitri
Week 2 - Rabu: Windi,Dimitri
Week 2 - Kamis: Rifki,Windi
Week 2 - Jumat: Rifki,Dimitri
Week 2 - Sabtu: Libur
Week 2 - Minggu: Libur

----------------------

Week 3 - Senin: Rifki,Windi
Week 3 - Selasa: Rifki,Dimitri
Week 3 - Rabu: Windi,Dimitri
Week 3 - Kamis: Rifki,Windi
Week 3 - Jumat: Rifki,Dimitri
Week 3 - Sabtu: Libur
Week 3 - Minggu: Libur

----------------------

```