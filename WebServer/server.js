const express = require('express');
const app = express();
const PORT = 3000;

// Usando el middleware
app.use(express.static(__dirname + '/public'));

// Para renderizar en nuestro hbs
// Express HBS engine
app.set('view engine', 'hbs');

/*
app.get('/', (req, res) => {
    //res.send('Hola Mundo');
    let salida = {
        nombre: "Jesus",
        edad: 23,
        url: req.url,
        sexo: "Masculino"
    };
    res.send(salida);
});
*/

/*
app.get('/data', (req, res) => {
    res.send("Hola Data");
});
¨*/

app.listen(PORT, () => {
    console.log(`Escuchando peticiones en el puerto ${PORT}`);
});