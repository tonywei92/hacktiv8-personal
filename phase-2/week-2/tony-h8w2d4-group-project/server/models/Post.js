module.exports = (mongoose, Schema) => {
    return mongoose.model('Post', new Schema({
        title: String,
        bucketinfo: String,
        user_id: { type: Schema.Types.ObjectId, ref: "User" },
        created_at: Date
    }))
}