// This is basically the controller for the raspberry pi
const { weatherData } = require('./external_api/weather');
const { constructWeatherMessage, WeatherBot,  } = require('./messaging/weather_messaging');
const writeAudioTextToSpeech = require('../speech/text_to_speech');

const env = require('../config/enviornments');

const key = env.WEATHER_KEY;

/**
 * @TODO 
 *  [] 
 */

const weatherBot = async () => {
    // I should cache data to minimize calls to API. 
    // Example, what if I ask what the weather is, and I ask again because I 
    // Use caching with child proccesses. 
    let msg;
    await weatherData(key)
        .then((data) => {
            msg = constructWeatherMessage(data);
            // writeAudioTextToSpeech(msg);
            console.log(msg)
        })
        .catch((err) => {
            console.log(err.message)
        });

    // const bot = new WeatherBot(result);
    // bot.constructCurrentWeatherMessage()
}

// Make a request to the API
// The return value will be a string that will be echoed
if (require.main === module) {

    weatherBot()
}