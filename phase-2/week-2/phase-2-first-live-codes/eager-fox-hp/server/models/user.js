const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const encryption = require('../helpers/encryption');

var userSchema = new Schema({
    password:{
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        validate: function (email) {
                var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{1,4})?$/
                return emailRegex.test(email)
        }
    }
})
userSchema.pre('save', function(next){
    this.password = encryption.getHashedPassword(this.password)
    next()
})
userSchema.path('email').validate(async (value) => {
    let user =  await mongoose.models.User.findOne({email:value});
    return !user;
}, 'Email already exists');

const User = mongoose.model('User', userSchema)
module.exports = User