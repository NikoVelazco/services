const express = require('express'); 
const cors = require('cors'); 
const {mongoose} = require('./database');

var app = express(); 
//middlewares 
app.use(express.json()); 
app.use(cors({origin: 'http://localhost:4200'}));

//Cargamos el modulo de direccionamiento de rutas
app.use('/api/local', require('./routes/local.route'));
app.use('/api/usuario', require('./routes/usuario.route'));
app.use('/api/propietario', require('./routes/propietario.route'));
app.use('/api/alquiler', require('./routes/alquiler.route'));

//setting 
app.set('port', process.env.PORT || 3000);

//starting the server 
app.listen(app.get('port'), () => { 
    console.log(`Server started on port`, app.get('port')); 
});