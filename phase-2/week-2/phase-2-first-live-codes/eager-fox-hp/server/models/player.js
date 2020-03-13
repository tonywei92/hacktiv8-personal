const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

var playerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    house:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required:true
    },
    userId : {
        type: Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }

})
playerSchema.path('name').validate(async (value) => {
    let user =  await mongoose.models.Player.findOne({name:value});
    return !user;
}, 'Student already exists in team');

const Player = mongoose.model('Player', playerSchema)
module.exports = Player