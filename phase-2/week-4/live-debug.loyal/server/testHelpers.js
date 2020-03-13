const Book = require('./models/Book');
const Member = require('./models/Member');
const Loan = require('./models/Loan');

module.exports = {
  createBook: async function(bookObject) {
    const newBook = await Book.create(bookObject);
    return newBook;
  },
  createMember: async function(memberObject) {
    const newMember = await Member.create(memberObject);
    return newMember;
  },
  removeAllBooks: async function() {
    if (process.env.NODE_ENV === 'test') await Book.deleteMany({});
  },
  removeAllMembers: async function() {
    if (process.env.NODE_ENV === 'test') await Member.deleteMany({});
  },
  removeAllLoans: async function() {
    if (process.env.NODE_ENV === 'test') await Loan.deleteMany({});
  },
};
