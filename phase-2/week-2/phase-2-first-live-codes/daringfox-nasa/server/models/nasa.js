const mongoose = require('mongoose');
const { Schema } = mongoose;

const nasaSchema = new Schema({
  date: String,
  title: {
    type: String,
    validate: {
      validator: function(value) {
        return Nasa.find({
              title: value
           })
          .then( data => {
              if(data.length !== 0) {
                  throw 'This astronomi picture already in your library!';
              }
          })
          .catch(err => {
              throw err;
          });
      }
    }
  },
  url: String,
  mediaType: String,
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Nasa = mongoose.model('Nasa', nasaSchema);

module.exports = Nasa
