class Library {
  constructor(name) {
    this.name = name
    this.collection = {}
  }

  addCollection(books) {
    books.forEach((book) => {
      const category = book.category
      if (!this.collection[category]) {
        this.collection[category] = []
      }
      this.collection[category].push(book)
    })
  }

  priceFilter(option, value) {
    const filteredBooks = []
    for(const category in this.collection) {
      for (let i = 0; i < this.collection[category].length; i++) {
        const book = this.collection[category][i]
        if (option === "lower") {
          if (book.price < value) {
            filteredBooks.push(book)
          }
        } else if (option === "higher") {
          if (book.price > value) {
            filteredBooks.push(book)
          }
        }
      }
    }
    if (filteredBooks.length === 0) {
      console.log("Oops books are not found")
    } else {
      console.log(`LIST COLLECTION`)
      console.log(`===============`)
      filteredBooks.forEach((book, idx) => {
        console.log(`${idx+1}. ${book.title}:${book.category}:${book.price}`)
      })
    }
  }
}

class Printing {
  static printBook(books) {
    const collection = []
    for(const category in books) {
      for (let i = 0; i < books[category].length; i++) {
        let newBook = null
        const [item, page] = books[category][i].split(":")
        switch (category) {
          case "Fiction":
            newBook = new Fiction(item, page)
            break;
          case "Language":
            newBook = new Language(item, page)
            break;
          case "Engineering":
            newBook = new Engineering(item, page)
            break;
          default:
            break;
        }
        if (newBook) {
          collection.push(newBook)
        }
      }
    }
   return collection
  }
}



class Book {
  constructor(title, price, page, category) {
    this.title = title
    this.price = price
    this.page = page
    this.category = category
  }
}

class Fiction extends Book {
  constructor(title, page) {
    super(title, page * 1500, page, "Fiction")
  }
}

class Language extends Book {
  constructor(title, page) {
    super(title, page * 1000, page, "Language")
  }
}

class Engineering extends Book {
  constructor(title, page) {
    super(title, page * 500, page, "Engineering")
  }
}


const books = Printing.printBook({
  Fiction: ["Less:100", "Idioms:90", "Harry Potter:300"],
  History: ["Tan Malaka:200"],
  Language: ["english:80", "deutsch:75"],
  Engineering: ["electrical:122", "mechanical:122"]
})


const universityLib = new Library("University Lib")
universityLib.addCollection(books)
// console.log(universityLib)
universityLib.priceFilter("lower", 50000)