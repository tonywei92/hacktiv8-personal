const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  member: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: [true, 'Member is required'],
  },
  books: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    validate: {
      validator: function(v) {
        return v.length > 0;
      },
      message: 'Book(s) is required',
    }
  },
  date_loaned: { type: Date, default: Date.now },
  date_returned: { type: Date },
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
