const express = require('express');
const app = express();
const PORT = 3000;

// Usando el middleware
app.use(express.static(__dirname + '/public'));

// Para renderizar en nuestro hbs
// Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Jesus",
        anio: new Date().getFullYear()
    });
});

app.listen(PORT, () => {
    console.log(`Escuchando peticiones en el puerto ${PORT}`);
});