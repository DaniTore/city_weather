# WEATHER APLICATION
1. Install dependencies 
```
npm install

```
2. Yo need to create a fille name: API_KEY.js a get the yout api Key in this webs
```
const API_KEY_GEOLOC = '**************************';  // --> https://developer.mapquest.com/
const API_KEY_OPENWEATHER = '********************************'; // --> https://openweathermap.org/

module.exports = {
    API_KEY_GEOLOC,
    API_KEY_OPENWEATHER
}
```
3. To get temperature of some location:
```
node app -d "Name of the place"
```
