/**
 * Usando HTTP
 **/
const http = require('http');
const PORT = 8080;
const OK = 200;

// De esta forma creamos un webserver
http.createServer((req, res) => {

        // Podria ser un json
        res.writeHead(OK, {
            'Content-Type': 'application/json'
        });

        let salida = {
            nombre: "Jesus",
            edad: 23,
            url: req.url,
            sexo: "Masculino"
        };

        // Esto es un página web
        // res.write("Hola Mundo\n");

        // Mostramos el JSON
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(PORT);

console.log("Escuchando el puerto 8080");