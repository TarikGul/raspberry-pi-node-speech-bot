const messages = require('./util/weather_messages');

const userName = process.env.USER_NAME;

const constructWeatherMessage = (data) => {
    // name    => city
    // main    => OBJ of temperatures
    // weather => array with one object inside that has the description of the weather
    const { name, main, weather } = data;

    const greeting = messages.weatherGreeting(userName, weather[0].main, name);
    const tellTemperature = messages.tempReading(main.temp, main.feels_like);

    // Returns the actual message of the 
    return [greeting, tellTemperature].join(' ');
}

module.exports = {
    constructWeatherMessage
};