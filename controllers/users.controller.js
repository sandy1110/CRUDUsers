'use strict'

const getUsers = (req, res) => {
    try{
        res.status(200).send({mensaje : "Hola mundo"});
    }catch (err){
        res.status(500).send(err);
    }
}

module.exports = {getUsers}