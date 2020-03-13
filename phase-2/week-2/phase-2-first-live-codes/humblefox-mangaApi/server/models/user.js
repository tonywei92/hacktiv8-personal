const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { hashPassword } = require('../helpers/passwordHelper')

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function (val) {
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(val.toLowerCase());
            }
        },
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.pre('save', function(next) {
    this.password = hashPassword(this.password)
    next()
})

const User = mongoose.model('User', userSchema)
module.exports = User

