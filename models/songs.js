const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');


let Schema = mongoose.Schema;

const songSchema = new Schema({
  
song_name: {
  type: String,
},
notes: [{
  type: String,
}]

})
songSchema.plugin(timestamps);
const Song = mongoose.model('song', songSchema);

module.exports = Song;