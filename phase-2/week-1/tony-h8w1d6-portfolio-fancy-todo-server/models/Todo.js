module.exports = (mongoose, Schema) => {
    return mongoose.model('Todo', new Schema({
        name: String,
        description: String,
        status: String,
        due_date: Date,
        user: { type: 'ObjectId', ref: 'User' }
    }));
}