# KEYWORD SEARCHING

> ⏰ time estimation: 40 minutes

Mensin pencari menampilkan hasil pencarian berdasarkan kesesuaian kata yang dimiliki dalam suatu kalimat dengan kata kunci yang diberikan.
Dari setiap kalimat yang tersedia dicari rangkaian kata sesuai kata kunci kemudian berikan nilai sejumlah kata di pangkat dua, kata yang telah ditemukan tersebut kemudian di singkirkan dari kalimat agar tidak dihitung kembali.
Urutan hasil pencarian berdasarkan point terbesar dari masing-masing kalimat yang tersedia.

Notes:\
Besar dan kecilnya huruf tidak berpengaruh pada hasil pencarian

 
### Release 0
---
Tampilkan setiap rangkaian kata yang akan di cari

```javascript
console.log(getKeyWord("cat and dog"))
// Result
[
  'cat and dog',
  'cat and',
  'and dog',
  'cat',
  'and',
  'dog' 
]

console.log(getKeyWord("cat and dog eat"))
// Result
[ 'cat and dog eat',
  'cat and dog',
  'and dog eat',
  'cat and',
  'and dog',
  'dog eat',
  'cat',
  'and',
  'dog',
  'eat' ]
```

### Release 1
Hitung setiap point yang didapat pada kalimat yang diberikan, berdasarkan rangkaian kata yang dicari.\
Rules
- rangkaian kata yang dicari tidak memperhitungkan besar kecilnya huruf
- setiap rangkaian kata yang ditemukan mendapatkan point sejumlah kata pangkat dua
- rangkaian kata yang sudah ditemukan tidak diperhitungkan lagi pada pencarian selanjutnya
- jika ditemukan kata yang mengandung kata yang dicari akan tetap dihitung contoh `uppercat` akan tetap dihitung ketika mencari dengan keyword `cat`

```javascript
console.log(searchInSentence(`cat and dog`,
'At home I have a cat and dog the cat named Tom and the dog named Dog. My cat and dog are so cute'))
/* Proses perhitungan point
kata awal: 'At home I have a cat and dog the cat named Tom and the dog named Dog. My cat and dog are so cute'
Cari kalimat `cat and dog` terdiri dari 3 kata maka masing-masing pointnya 9 (3 pangkat 2)
karena di temukan 2 buah maka di kali 2 point yang didapat menjadi 18 (8 kali 2)

total point keseluruhan 18

kata berikutnya: 'At home I have a the cat named Tom and the dog named Dog. My are so cute'
diluar kalimat sebelumnya ditemukan 1 kalimat `cat`  terdiri dari 1 kata maka pointnya 1 (1 pangkat 2)
karena di temukan 1 buah maka di kali 1 point yang didapat menjadi 1 (1 kali 1)

total point keseluruhan 18 + 1 = 19

kata berikutnya: 'At home I have a the named Tom and the dog named Dog. My are so cute'
diluar kalimat sebelumnya ditemukan 1 kalimat `and`  terdiri dari 1 kata maka pointnya 1 (1 pangkat 2)
karena di temukan 1 buah maka di kali 1 point yang didapat menjadi 1 (1 kali 1)

total point keseluruhan 19 + 1 = 20

kata berikutnya: 'At home I have a the named Tom the dog named Dog. My are so cute'
diluar kalimat sebelumnya ditemukan 2 kalimat `dog`  terdiri dari 1 kata maka masing-masing pointnya 1 (1 pangkat 2)
karena di temukan 2 buah maka di kali 2 point yang didapat menjadi 2 (1 kali 2)

total point keseluruhan 20 + 2 = 22

kata berikutnya: 'At home I have a the named Tom the named. My are so cute'
*/
// Result
22

console.log(searchInSentence(`cat and dog`,
'Tom is a ignorant cat and a dog is a calm animal. When Tom with other cats are like the king of cats'))
/* Proses perhitungan point
Cari kalimat `cat and` terdiri dari 2 kata maka masing-masing pointnya 4 (2 pangkat 2)
karena di temukan 1 buah maka di kali 1 point yang didapat menjadi 4 (4 kali 1)

total point keseluruhan 4

diluar kalimat sebelumnya ditemukan 1 kalimat `cat`  terdiri dari 1 kata maka pointnya 1 (1 pangkat 2)
karena di temukan 2 buah maka di kali 2 point yang didapat menjadi 2 (1 kali 2)

total point keseluruhan 4 + 2 = 6

diluar kalimat sebelumnya ditemukan 1 kalimat `dog`  terdiri dari 1 kata maka pointnya 1 (1 pangkat 2)
karena di temukan 1 buah maka di kali 1 point yang didapat menjadi 1 (1 kali 1)

total point keseluruhan 6 + 1 = 7
*/
// Result
7
```

### Release 2
Buatlah function searchByKeyWord menerima `string` keyword yang di input dan `array` kumpulan hasil kalimatnya. Function ini akan mengasilkan `array` kalimat berurutan berdasarkan hasil point pencarian terbesar

```javascript
console.log(searchByKeyWord(`cat and dog`, [
  `At home I have a cat and dog the cat named Tom and the dog named Dog. My cat and dog are so cute`,
  `Sometimes Tom ate dog food and because of that the Dog was very angry and chased after Tom`,
  `When a dog chases Tom, it looks funny like a classic cat and dog story`,
  `Tom is a ignorant cat and a dog is a calm animal. When Tom with other cats are like the king of cats`,
  `Dog are usually quiet except when it comes to food`
]))

// Result
[ 
  'At home I have a cat and dog the cat named Tom and the dog named Dog. My cat and dog are so cute',
  'Sometimes Tom ate dog food and because of that the Dog was very angry and chased after Tom',
  'When a dog chases Tom, it looks funny like a classic cat and dog story',
  'Tom is a ignorant cat and a dog is a calm animal. When Tom with other cats are like the king of cats',
  'Dog are usually quiet except when it comes to food'
]
```


