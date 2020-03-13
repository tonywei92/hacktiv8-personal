module.exports = (mongoose, Schema) => {
    return mongoose.model("User",
        new Schema({
            fullname: String,
            email: String,
            password: String,
            google_id: String,
            facebook_id: String
        })
    );
}