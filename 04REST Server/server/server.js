const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');

// Middlewares
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Hello World');
});

app.get('/usuario', (req, res) => {
    res.json('GET Usuario');
});

app.post('/usuario', (req, res) => {
    // Procesar información que le mandamos
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id: id
    });
});

app.delete('/usuario', (req, res) => {
    res.json('DELETE Usuario');
});

app.listen(PORT, () => {
    console.log(`Escuchando puerto ${PORT}\n`);
});