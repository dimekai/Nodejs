const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

lugar.getLugarLatLong(argv.direccion)
    .then(response => {
        console.log(response);
    }).catch(error => {
        console.log("Hubo un error\n", error);
    });

clima.getClima(19.41944, -99.14556)
    .then(resp => {
        console.log(resp);
    }).catch(error => {
        console.log('Hubo un error para el clima', error);
    });