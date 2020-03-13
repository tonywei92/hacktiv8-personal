const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  zipcode: {
    type: String,
    required: [true, 'Zipcode is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  phone_number: {
    type: String,
    required: [true, 'Phone Number is required'],
    minlength: [5, 'Invalid Phone Number length'],
    unique: true,
  },
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
