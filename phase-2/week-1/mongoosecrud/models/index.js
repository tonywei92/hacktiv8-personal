const mongoose = require('../mongoose');
const Schema = mongoose.Schema;
const Types = Schema.Types;

const Book = require('./Book')(mongoose, Schema, Types);
const Member = require('./Member')(mongoose, Schema, Types);
const Transaction = require('./Transaction')(mongoose, Schema, Types);
module.exports = { Book, Member, Transaction };