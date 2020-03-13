module.exports = (mongoose, Schema) => {
    const schema = new Schema({
        full_name : {type: String, required: [true, "Full name is required"]},
        email: {type: String, required: [true, "Email is required"], unique: [true, "Email already taken"]},
        password: {type: String, required: [true, "password is required"]}
    })

    return mongoose.model("User", schema);
}