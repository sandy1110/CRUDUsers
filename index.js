'use strict'
const app = require("./app");
const ip = require("ip");
const port = 8080;
const mongoose = require('mongoose');

const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

mongoose.connect("mongodb+srv://dev_user:NzuR5EGLBByKvfCj@cluster0.2vlym.mongodb.net/dev?retryWrites=true&w=majority",
connectionOptions, (error, res) => {
    if(error){
        return console.log("no se pudo conectar", error);
    }else{
        console.log ("Nos conectamos a la base de datos");
        app.listen(port, () => {
            console.log(`API REST corriendo en http://${ip.address()}:${port}/`)
        });
    }
})