const { default: Axios } = require('axios');
const AXIOS = require('axios');
const { API_KEY_OPENWEATHER } = require('../API_KEY');

const GET_WEATHER = async(latitude, longitude) => {

    const WEATHER = await AXIOS.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY_OPENWEATHER}&units=metric`)

    return WEATHER.data.main.temp
}

module.exports = {
    GET_WEATHER
}