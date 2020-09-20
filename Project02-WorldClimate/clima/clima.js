const axios = require('axios');
const appid = require('../config/token').getTokenClima();

const getClima = async(lat, long) => {

    const params = {
        lat: lat,
        lon: long,
        appid: appid,
        units: 'metric'
    };

    const resp = await axios.get('https://api.openweathermap.org/data/2.5/weather', { params });

    return resp.data.main.temp;
};

module.exports = { getClima };