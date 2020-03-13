'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('../helpers/bcrypt');

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email must unique'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        validate: {
            validator: function(email) {
                return User.findOne({ email })
                .then(user => {
                    if(user) {
                        return false;
                    } else {
                        return true;
                    }
                })
                .catch(err => {
                    console.log('Validator Error:', err);
                })
            },
            message: 'Email already exist'
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    }
})

UserSchema.pre('save', function(next) {
    this.password = bcrypt.generateHash(this.password);
    next();
})

const User = mongoose.model('User', UserSchema);

module.exports = User;