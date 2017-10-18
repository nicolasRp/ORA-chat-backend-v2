const mongoose = require('mongoose');
const Message = require('../models/message');


function sendMessage(req, res){
    let message = new Message();    
    message.user = req.body.user;
    message.content = req.body.content;
    message.time = req.body.time;
     message.save((err, messageStored) => {
        if (err) res.status(500).send(`error al guardar en la base de datos ${err}`)
        res.status(200).send({ message: messageStored })
    })
}
function allMessages(req, res){
    
    Message.find({}, (err, messages) => {
        if (err) return res.status(500).send({ message: `se produjo un error ${err}` })
        if (!messages) return res.status.send({ message: 'No se encontraron mensajes' })
    
            res.status(200).send(messages)
        })
}
module.exports = {
    sendMessage,
    allMessages
}
