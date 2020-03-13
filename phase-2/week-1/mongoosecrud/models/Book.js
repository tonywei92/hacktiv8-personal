module.exports = function (mongoose, Schema) {
    return mongoose.model("Book", new Schema({
        isbn: String,
        title: String,
        author: String,
        category: String,
        stock: Number
    }));
}
