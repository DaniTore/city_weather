const AXIOS = require('axios');
const { API_KEY_GEOLOC } = require('../API_KEY');


const GET_LAT_LAG_FROM_PLACE_NAME = async(address) => {
    const ENCODED_URL = encodeURI(address);
    console.log(ENCODED_URL);

    const INSTANCE = AXIOS.create({
        baseURL: `http://open.mapquestapi.com/geocoding/v1/address?key=${API_KEY_GEOLOC}&location=${ENCODED_URL}`,
    })

    const GET_RESPONSE = await INSTANCE.get()

    if (GET_RESPONSE.data.results.length === 0) {
        throw new Error(`No results for ${address}`)
    }

    const DATA_FROM_GET_RESPONSE = GET_RESPONSE.data.results[0].locations[0];
    const PLACE = DATA_FROM_GET_RESPONSE.adminArea5;
    const LATITUD = DATA_FROM_GET_RESPONSE.latLng.lat;
    const LONGITUD = DATA_FROM_GET_RESPONSE.latLng.lng;

    return {
        PLACE,
        LATITUD,
        LONGITUD
    }
}

module.exports = {
    GET_LAT_LAG_FROM_PLACE_NAME
}