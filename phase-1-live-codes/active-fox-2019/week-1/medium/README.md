### MOST COMMON WORDS SORTING
###### estimasi waktu: 45 Menit

Most Common Words Sorting adalah sebuah fungsi yang akan menerima parameter berupa array of sentences atau kumpulan kalimat kemudian akan mengembalikan nilai berupa kumpulan kalimat yang sudah terurut berdasarkan seberapa banyak kemiripan kata tersebut pada kalimat lain.

#### Rules 
- `Budi` dan `budi` adalah kata yang sama
- `Siapa?` dan `siapa` adalah kata yang berbeda
- Apabila dalam satu kalimat terdapat 2 kata yang sama maka dihitung sebagai dua kata yang berbeda contoh `hello world, hello me` dan `hello i am steve` pada kalimat pertama terdapat 2 kata yang tidak unique yaitu `hello` dan `hello`.

#### Example
```javascript
const words [
  "halo nama saya budi", // halo, nama, budi => kata yang terdapat juga dikalimat lain
  "nama kamu siapa?", // nama
  "ini budi", // ini, budi
  "halo ini ayah saya budi dan saya rahman" // halo, ini, budi, saya, saya
]

console.log(mostCommonWordsSorting(words))
/* OUTPUT
  [
    "nama kamu siapa?",
    "ini budi",
    "halo nama saya budi",
    "halo ini ayah saya budi dan saya rahman"
  ]
*/
```