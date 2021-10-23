const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app)
const logger = require('morgan');
const cors = require('cors');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.disable('x-powered-by');



//const port = process.env.PORT ||3000;
//app.set('port',port);
/*
server.listen(3000,'147.182.169.212' || 'localhost', function(){
    console.log('aplicacion de nodeJs' + process.pid+'iniciada...')
});*/

// ruta raiz 
app.get('/',(req, res ) => {

    res.send("ruta raiz del backend");
});

app.get('/test',(req, res ) => {

    res.send(" ruta del test");
});


//error del handler
app.use((err, req, res, next ) => {
    console.log(err);
    res.status(err.status || 500 ).send(err.stack);
});



//app.get('/',(req, res) =>res.send('Backend de la aplicacion Reciclando a tiempo real'));

app.listen(3000);
console.log('test de la aplicacion en digitalOcean', 3000);
