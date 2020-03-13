module.exports = (mongoose, Schema) => {
  return mongoose.model('Article',
    new Schema({
      title: { type: String, required: true },
      content: { type: String, required: true },
      featured_image: String,
      slug: String,
      author: { type: 'ObjectId', ref: 'User' },
      created_at: Date,
      updated_at: Date
    }));
};
