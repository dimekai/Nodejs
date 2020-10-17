const express = require('express');
const app = express();

// Obtener el puerto de Heroku
const PORT = process.env.PORT || 3000;

const hbs = require('hbs');
require('./hbs/helper');

// Usando el middleware
app.use(express.static(__dirname + '/public'));

// Para renderizar en nuestro hbs
// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: "jesus"
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(PORT, () => {
    console.log(`Escuchando peticiones en el puerto ${PORT}`);
});