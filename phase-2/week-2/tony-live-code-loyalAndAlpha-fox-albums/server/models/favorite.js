const mongoose = require('mongoose');
const { Schema } = mongoose;

const favSchema = new Schema({
  albumTitle: {
    type: String,
    validate: {
      validator: function(value) {
        return Favorite.find({
              albumTitle: value
           })
          .then( data => {
              if(data.length !== 0) {
                  throw 'This album already in your favorites!';
              }
          })
          .catch(err => {
              throw err;
          });
      }
    }
  },
  singer: String,
  yearReleased: Number,
  description: String,
  coverAlbum: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Favorite = mongoose.model('Favorite', favSchema);

module.exports = Favorite
