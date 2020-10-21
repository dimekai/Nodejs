require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT;

// Middlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Para que el server reconozca la ruta /usuario
app.use(require('./routes/usuario'));

// Conexion de la base de datos
mongoose.connect('mongodb://localhost:27017/cafe', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => {
    if (err) throw err;
    console.log("BASE DE DATOS ONLINE")
});

app.listen(PORT, () => {
    console.log(`\nEscuchando puerto ${PORT}`);
});