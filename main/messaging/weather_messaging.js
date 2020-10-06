const messages = require('./util/weather_messages');
const tempRating = require('./util/temp_rating');

const env = require('../../config/enviornments');

const userName = env.USER_NAME;

const constructWeatherMessage = (data) => {
    // name    => city
    // main    => OBJ of temperatures
    // weather => array with one object inside that has the description of the weather
    const { name, main, weather } = data;
    const rating = tempRating(main.temp);

    const greeting        = messages.weatherGreeting(userName, weather[0].main, name);
    const tellTemperature = messages.tempReading(main.temp, main.feels_like);
    const clothingAdvice  = messages.clothingAdvice(rating);

    // Returns the actual message of the 
    return [greeting, tellTemperature, clothingAdvice].join(' ');
}

module.exports = {
    constructWeatherMessage
};