const axios = require('axios');
const params = require('../config/token').getTokenLugar();

/**
 * 
 * @param {string} direccion 
 * @returns {string} direccion : Dirección de la ciudad
 * @returns {string} lat  : Latitud de la ciudad
 * @returns {string} long : Longitud de la ciudad
 * @returns Una promesa (Promise)
 * @description A partir de la dirección dada, usamos la API de mapbox para poder
 * 				regresar los datos de la ciudad buscada
 */
const getLugarLatLong = async(direccion) => {

    // Para evitar errores con los espacios y otros caracteres
    const encoded_locate = encodeURI(direccion);

    // Obtenemos la respuesta obtenida de la API
    let resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encoded_locate}.json`, { params });

    // Validamos si se encontró la ciudad
    if (resp.data.features.length == 0) {
        throw new Error('No hay resultados para la ciudad seleccionada.\n');
    } else {
        const data = resp.data.features[1];
        return {
            direccion: data.place_name,
            lng: data.geometry.coordinates[0],
            lat: data.geometry.coordinates[1]
        };
    }
};

module.exports = {
    getLugarLatLong
}