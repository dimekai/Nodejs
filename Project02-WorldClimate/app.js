const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');

lugar.getLugarLatLong(argv.direccion)
    .then(response => {
        console.log(response);
    }).catch(error => {
        console.log("Hubo un error\n", error);
    });