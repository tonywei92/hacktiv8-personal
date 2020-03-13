class Library {
  constructor() {
    this.name    = 'Perpustakaan Javascript'
    this.address = 'Pondok Indah'
    this.book    = []
  }

  addBook(book){
    this.book.push(book)
  }
}

class Book {
  constructor(title, author, total) {
    this.title       = title
    this.author      = author
    this._totalPages = total
    this.readingDays = this.calculate()
    this.isAvail     = true
  }
  get totalPages(){
    if(this._totalPages < 200){
      return this._totalPages
    }else{
      return 'Banyak halamannya capek ngitungnya'
    }
  }
  calculate(){
    return Math.ceil(this._totalPages/100)
  }
}
class Journal extends Book{
  constructor(title, author, total){
    super(title, author, total)
  }
}

class Biography extends Book{
  constructor(title, author, total, figure){
    super(title, author, total)
    this.figure = figure
  }
}
class History extends Book{
  constructor(title, author, total, century){
    super(title, author, total)
    this.century = century
  }
}

let perpus = new Library()

let journal   = new Journal('Jatuh Bangung Seorang Fullstack', 'Kang Udin', 89)
let biography = new Biography('Orang Dibalik Apple', 'Mas Bejo', 327, 'Steve Wozniak')
let history   = new History('Awal Peradaban Callback', 'Bang Togar', 127, 'Middle Earth')


console.log(biography.totalPages) // 'Banyak halamannya capek ngitungnya'
console.log(journal.totalPages) // 89

perpus.addBook(journal)
perpus.addBook(biography)
perpus.addBook(history)

console.log(perpus.book);
