module.exports = (mongoose, Schema) => {
  return mongoose.model('User', new Schema({
    full_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: String,
    created_at: Date,
    updated_at: Date
  }));
};
