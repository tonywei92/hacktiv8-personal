module.exports = (mongo, Schema) => {
    return mongo.model("User", new Schema({
        fullname: String,
        email: { type: String, index: true, unique: true },
        password: String,
        role: String
    }))
}