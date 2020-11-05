const GEOLOCATION = require('./place/place');
const WEATHER = require('./weather/weather');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

const GET_INFO = async(location) => {
    try {
        const COORDINATES = await GEOLOCATION.GET_LAT_LAG_FROM_PLACE_NAME(location);
        const TEMPERATURE = await WEATHER.GET_WEATHER(COORDINATES.LATITUD, COORDINATES.LONGITUD);
        return `El clima de ${COORDINATES.LOCATION} es de ${TEMPERATURE} ºC`
    } catch (error) {
        return `No se pudo determinar el clima de ${location}`
    }
}

GET_INFO(argv.direccion)
    .then(console.log)
    .catch(console.log)