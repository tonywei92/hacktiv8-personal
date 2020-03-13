'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PasswordSchema = new Schema({
    url: {
        type: String,
        required: [true, 'Url is required']
    },
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    UserId: {
        type: Schema.Types.ObjectId,
        required: [true, 'UserId is required']
    }
})

const Password = mongoose.model('Password', PasswordSchema);

module.exports = Password;