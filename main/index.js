// This is basically the controller for the raspberry pi
const { weatherData } = require('./external_api/weather');
const { constructWeatherMessage } = require('./messaging/weather_messaging')

const env = require('../config/enviornments');

const key = env.WEATHER_KEY;

// Make a request to the API
// The return value will be a string that will be echoed
if (require.main === module) {
    let msg;

    weatherData(key)
        .then((data) => {
            msg = constructWeatherMessage(data);
            console.log(msg)
        })
        .catch((err) => {
            console.log(err.message)
        })

}