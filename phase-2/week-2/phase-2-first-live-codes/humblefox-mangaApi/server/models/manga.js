const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mangaSchema = new Schema({
   title: {
       type: String,
       required: true,
       validate: {
            validator: function(val){
                console.log(val)
                return Manga.findOne({
                    title: val
                })
                .then( manga => {
                    if(manga) {
                        return false
                    } else {
                        return true
                    }
                })
            },
            message: "This manga title already added to collection"
       }
    },
   description: String,
   chapters_len: Number,
   author: String,
   categories: [ String ],
   ownerId: {
       type: Schema.Types.ObjectId,
       ref: 'User',
       required: true
   } 
})

const Manga = mongoose.model('Manga', mangaSchema)

module.exports = Manga