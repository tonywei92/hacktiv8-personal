/**

Count Virus
================

Implementasikan function countVirus untuk menghitung
jumlah virus yang ada. Hanya akan ada 4 tipe virus, yaitu:
- *
- #
- @
- $

# Contoh:
- `input` -> **##@
  output -> 2*, 2#, 1@
- `input` -> **#*##
  output -> 3*, 3#

Contoh lain ada di test case

# Asumsi:
- `input` tidak akan pernah kosong
- `input` pasti berisi virus

# Aturan coding:
- DILARANG menggunakan regex
- Boleh menggunakan LOOP
- HARUS MENGGUNAKAN REKURSIF
- TIDAK MENGGUNAKAN REKURSIF NILAI 0
*/

function countVirus(str) {
  // your code here
}

console.log(countVirus('**#*##')) // 3*, 3#
console.log(countVirus('**######')) // 2*, 6#
console.log(countVirus('**##@')) // 2*, 2#, 1@
console.log(countVirus('@')) // 1@
console.log(countVirus('#$*@')) // 1#, 1$, 1*, 1@