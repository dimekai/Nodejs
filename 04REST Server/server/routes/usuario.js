const express = require('express');
const app = express();
const Usuario = require('../models/usuario');


app.get('/', (req, res) => {
    res.json('Hello World');
});

app.get('/usuario', (req, res) => {
    res.json('GET Usuario LOCAL');
});

app.post('/usuario', (req, res) => {
    // Procesar información que le mandamos
    let body = req.body;

    // Crea una nueva instancia del schema Usuario 
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        rol: body.rol
    });

    let isNotAllData = usuario.nombre === undefined || usuario.email === undefined || usuario.password === undefined;

    // usuarioDB es la respuesta del usuario que se grabó en la B.D Mongo
    usuario.save((err, usuarioDB) => {
        if (err || isNotAllData) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });

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

module.exports = app;