const mongoose = require('mongoose');
const User = require('../models/user');
const service = require('../services');


function create(req, res){
    const user = new User({
        name: 'User'+ Math.floor((Math.random() * 1838))
})
    
    user.save((err) =>{
        if(err) res.status(500).send({message: 'error al crear el usuario'})
        
        res.status(200).send({ 
            name: user.name,
            token: service.createToken(user)})
    })
}

module.exports = {
    create
}