/*
============
Cloud Jumper
============

[INSTRUCTIONS]
Cloud Jumper adalah sebuah permainan game yang temanya adalah melompati awan-awan dari titik awal ke titik terakhir untuk menyelesaikannya,
terdapat dua jenis awan, awan yang aman diwakili oleh value 0 dan awan dengan petir diwakili value 1,
pemain harus menghindari awan berpetir, minimal lompatan adalah 1 lompatan dan maksimal adalah 2 lompatan.
dengan kasus ini, temukan nilai minimum jumlah lompatan!

[EXAMPLE]
clouds = [0, 1, 0, 0 ,0, 1, 0]
terdapat 2 cara untuk menyelesaikan game diatas, yaitu:
idx-0 -> idx-2 -> idx-4 -> idx-6
      2         2        2
total: 3 lompatan
idx-0 -> idx-2 -> idx-3 -> idx-4 -> idx-6
      2         1        1       2
total: 4 lompatan

cara pertama membutuhkan 3 lompatan sedangkan cara ke dua membutuhkan 4 lompatan.
Maka hasilnya adalah 3 (karena paling sedikit 3).

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string &
  array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
*/

function cloudJumper(clouds) {
  // your code here
  
}

console.log(cloudJumper([0, 1, 0, 0, 0, 1, 0])); // 3
console.log(cloudJumper([0, 1, 0, 0, 1, 0, 0])); // 4
console.log(cloudJumper([0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0])); // 17
