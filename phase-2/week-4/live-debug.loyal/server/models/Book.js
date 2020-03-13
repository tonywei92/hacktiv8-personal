const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    required: [true, 'ISBN is required'],
    minlength: [10, 'Invalid ISBN length'],
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  stock: {
    type: Number,
    required: [true, 'Stock is required'],
    min: [0, 'Invalid Stock'],
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
