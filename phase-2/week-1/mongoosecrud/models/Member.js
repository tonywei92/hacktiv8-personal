const validator = require('validator');

module.exports = function (mongoose, Schema, Types) {
    return mongoose.model("Member", new Schema({
        name: String,
        address: String,
        zipcode: String,
        email: {
            type: String,
            unique: true,
            validate: {
                validator: (v) => validator.isEmail(v),
                message: "Not a valid email value"
            }
        },
        phone: {
            type: String,
            validate: {
                validator: (v) => v.length >= 11 && v.length <= 13,
                message: "Only String between 11 and 13 length is allowed"
            }
        }
    }));
}