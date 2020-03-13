const mongoose = require('../connection');
const Schema = mongoose.Schema;

const User = require('./User');
const Post = require('./Post');


module.exports = {
    User: User(mongoose, Schema),
    Post: Post(mongoose, Schema)
}