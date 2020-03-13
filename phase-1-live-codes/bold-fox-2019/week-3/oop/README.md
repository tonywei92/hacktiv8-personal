# ** PERCETAKAN BUKU (45 Menit) **

Sebuah Percetakan Buku memiliki 3 macam jenis buku yang akan dicetak  yaitu Fiction, Language dan Engineering. Masing-masing jenis buku memiliki harga perhalaman yang berbeda yang berbeda.  

Buatlah class Book dengan property title, pages, category dan price

Adapun spesifikasi setiap Buku adalah sebagai berikut:

```text
Fiction

title: <bookTitle>,
category: "Fiction"
pages: <pages>
price: 1500 * <pages>
method()
  showQuote, menampilkan "Imagination takes you every where"

Language

title: <bookTitle>,
category: "Language"
pages: <pages>
price: 1000 * <pages>
method()
  showQuote, menampilkan "communication is the key"

Engineering

title: <bookTitle>,
category: "Engineering"
pages: <pages>
price: 500 * <pages>
method(
    showQuote, menampilkan "work hard, study hard"
)
```

### RELEASE 0

Buatlah class Printing dengan method printBook yang menerima parameter berupa object yang berisi buku apa saja yang ingin dibuat beserta jumlah halamannya.

Method akan mengembalikan array of Objects dari jenis semua buku yang sudah dicetak

```javascript
const books = Printing.printBook({
  Fiction: ["Less:100", "Idioms:90", "Harry Potter:300"],
  History: ["Tan Malaka:200"],
  Language: ["english:80", "deutsch:75"],
  Engineering: ["electrical:122", "mechanical:122"]
})
console.log(books)
// OUTPUT
// [ Fiction { title: 'Less', price: 150000, page: '100', category: 'Fiction' },
//   Fiction {
//     title: 'Idioms',
//     price: 135000,
//     page: '90',
//     category: 'Fiction' },
//   Fiction {
//     title: 'Harry Potter',
//     price: 450000,
//     page: '300',
//     category: 'Fiction' },
//   Language {
//     title: 'english',
//     price: 80000,
//     page: '80',
//     category: 'Language' },
//   ....
//   ]
```

### RELEASE 1

Buatlah class Library yang memiliki properti sebagai berikut:
  - name // library name
  - collection // books collection per category

Buatlah method `addCollection` yang outputnya adalah mengisi properti `collection` pada library dan menerima input array of object books yang sudah dibuat oleh method `printBook`.
```javascript
const universityLib = new Library("University Lib")
universityLib.addCollection(books)
console.log(universityLib)
/*
Library {
  name: 'University Lib',
  collection:
   { Fiction: [ [Fiction], [Fiction], [Fiction] ],
     Language: [ [Language], [Language] ],
     Engineering: [ [Engineering], [Engineering] ] } }
*/
```

### RELEASE 2

Buatlah method `priceFilter` pada class `Library` yang menerima input berupa `option` apakah dia difilter lebih kecil atau lebih besar dan `price` berupa batasan harga yang ingin difilter. Method ini bertujuan untuk menampilkan list buku yang sudah difilter berdasarkan harga. Asumsi params `option` hanya menerima nilai antara `lower` atau `higher`. Tampilkan `books are not found` apabila tidak ada satupun buku yang cocok dalam kondisi tersebut.

```javascript
universityLib.priceFilter("higher", 76000) // menampilkan buku yang memiliki harga diatas 76000
/*
LIST COLLECTION
===============
1. Less:Fiction:150000
2. Idioms:Fiction:135000
3. Harry Potter:Fiction:450000
4. english:Language:80000
*/

universityLib.priceFilter("lower", 50000)
// books are not found
```