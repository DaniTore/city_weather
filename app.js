const PLACE = require('./place/place')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

// argv.direccion

PLACE.GET_LAT_LAG_FROM_PLACE_NAME(argv.direccion)
    .then(console.log)