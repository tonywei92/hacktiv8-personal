/*
============================
ICE CREAM UNTUK ADI DAN BUDI
============================

[INSTRUCTIONS]

Setiap kali Adi dan Budi jalan-jalan ke toko Es Krim, mereka patungan untuk membeli masing-masing satu Es Krim. Penjual Es Krim menjual masing-masing rasa dengan harga yang berbeda-beda, tergantung ketersediaan bahan-bahan (musim buah tertentu).

Diberikan nilai "uang patungan" (var uang) dan "harga-harga eskrim" (var rasa), bantulah Adi dan Budi memilih dua rasa berbeda sehingga mereka menghabiskan seluruh uang mereka selama setiap ke toko Eskrim. Index eskrim yang dapat dibeli berdasarkan index yang dimulai dari 1.

Tampilkan output dua rasa eskrim dalam bentuk string yang dipisahkan dengan spasi, output harus ditampilkan index rasa yang lebih kecil terlebih dahulu kemudian yang lebih besar!

[Example]
input 1 :  [1, 4, 5, 3, 2]
input 2 : 4
hasilnya adalah rasa ke 1 dan 4, karena uang mereka 4, jadi membeli 1+3 untuk menghabiskan seluruh uang mereka.

[RULES]
1. dilarang menggunakan map, filter, reduce
2. dilarang menggunakan syntax es 6
*/

function rasaApa(rasa, uang) {
  for (var i = 1; i < rasa.length - 1; i++) {
    for (var j = 1; j < rasa.length - 1; j++) {
      if (rasa[i] + rasa[j] === uang) {
        if (i !== j) {
          return i + 1 + ' ' + (j + 1);
        }
      }
    }
  }
  return 'uang tidak mencukupi atau uang tidak habis';
}

console.log(rasaApa([1, 1, 1, 1, 1], 4)); // 1 4

console.log(rasaApa([1, 2, 3, 5, 6], 5)); // 2 3

console.log(rasaApa([4, 3, 2, 5, 7], 8)); // 2 4