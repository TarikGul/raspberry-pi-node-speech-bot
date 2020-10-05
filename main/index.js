// This is basically the controller for the raspberry pi
const messages = require('../util/messages/weather_messages');
const {weatherData} = require('../external_api/weather');

require('dotenv').config({ path: '../.env' });

/**
* For now this is holding the messaging bot;
*/

const userName = process.env.USER_NAME;

const constructWeatherMessage = (data) => {
    // name => city
    // main => OBJ of temperatures
    // weather => array with one object inside that has the description of the weather
    const { name, main, weather } = data;

    const greeting = messages.weatherGreeting(userName, weather[0].main, name);
    const tellTemperature = messages.tempReading(main.temp, main.feels_like);

    // Returns the actual message of the 
    return [greeting, tellTemperature].join(' ');
}

const key = process.env.WEATHER_KEY;



// Make a request to the API
// The return value will be a string that will be echoed
if (require.main === module) {
    let msg;
    
    weatherData(key).then((data) => {
        msg = constructWeatherMessage(data);
        console.log(msg)
    })
}