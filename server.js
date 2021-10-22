const express = require('express');
const app = express();

app.get('/',(req, res) =>res.send('Backend de la aplicacion Reciclando'));

app.listen(3000);
console.log('el servidor esta corriendo en el puerto', 3000);