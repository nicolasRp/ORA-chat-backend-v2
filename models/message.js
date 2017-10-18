const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    user: String,
    content: String,
    time: String,
})

module.exports = mongoose.model('Message', MessageSchema);  