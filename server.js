const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app)


const port = process.env.PORT ||3000;
app.set('port',port);

server.listen(3000,'147.182.169.212' || 'localhost', function(){
    console.log('aplicacion de nodeJs' + process.pid+'iniciada...')
});
/*
app.get('/',(req, res) =>res.send('Backend de la aplicacion Reciclando a tiempo real'));

app.listen(3000);
console.log('test de la aplicacion en digitalOcean', 3000);

*/