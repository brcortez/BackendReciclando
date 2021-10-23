const express = require('express');
const app = express();

app.get('/',(req, res) =>res.send('Backend de la aplicacion Reciclando'));

app.listen(3000);
console.log('test de la aplicacion en digitalOcean', 3000);