const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');
const messageCtrl = require('./controllers/message');
const userCtrl = require('./controllers/user');

const config = require('./config')
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//messages
app.post('/send', messageCtrl.sendMessage);
app.get('/all', messageCtrl.allMessages);

//user
app.post('/create', userCtrl.create);


io.set('origins', 'http://localhost:3000');

io.on('connection', (socket) => {
    socket.on('new message', function(msg) {
        socket.emit('new bc message', msg);
    });
});

//create promise 

 Promise = require('bluebird');
// plugin bluebird promise in mongoose

mongoose.Promise = Promise;

mongoose.connect(config.db, (err, res) => {
    if (err) return console.log('error en la conexiona la base de datos')
    console.log('conexion a la base de datos establecida....')
});
server.listen(8080, () => {
    console.log('servidor corriendo en el puerto 8080')
})
