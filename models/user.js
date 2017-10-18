const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    messages: Array,
})

module.exports = mongoose.model('User', UserSchema);  

