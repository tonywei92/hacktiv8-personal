# Hospital Room
Sebuah rumah sakit memiliki 4 golongan kamar yaitu : 
- Kelas I berisikan 1 orang pasien 
- Kelas II berisikan 2 orang pasien
- Kelas III berisikan 3 orang pasien 
- kelas IV berisikan 4 orang pasien

Jika pasien di kelas tertentu telah melebihi batas maka pasien tersebut akan diletakkan pada kamar selanjutnya.

Diberikan input berupa array multidimensi berisi data nama pasien beserta kelas nya. Output nya berupa object dengan `key` golongannya, yang berisi array multidimensi (data pasien per kamar)

contoh: 
``` javascript
input :    
[["Awtian", "II"],["Dimas", "I"],["Dimitri", "II"],["Icha", "II"]]
output : 
{ I: [ [ 'Dimas' ] ],
  II: [ [ 'Awtian', 'Dimitri' ], [ 'Icha' ] ] }

input : 
[["Arthamevia", "IV"],["Adhi", "III"],["Agus", "III"],["Zaskia", "I"],["Abu Hanifah", "III"],["Umi Hani", "I"],["Umar", "III"]]
output:
{ I: [ [ 'Zaskia' ], [ 'Umi Hani' ] ],
  III: [ [ 'Adhi', 'Abu Hanifah', 'Agus' ], [ 'Umar' ] ],
  IV: [ [ 'Arthamevia' ] ] }
```