// This is basically the controller for the raspberry pi
const { weatherData } = require('./external_api/weather');
const BootCLI = require('./boot/boot_cli');
const WeatherBot = require('./messaging/weather_messaging');
const writeAudioTextToSpeech = require('../speech/text_to_speech');

const env = require('../config/enviornments');

const key = env.WEATHER_KEY;

/**
 * @TODO 
 *  [] Change the way I call the bots, as in i have a process waiting for a response, 
 *     once I get that response then choose which bot i need to use accordingly. 
 */

const weatherBot = async () => { 
    const cityId = 5391959;
    const bot = new WeatherBot(cityId);
    const msg = await bot.constructCurrentWeatherMessage()
    // writeAudioTextToSpeech(msg);
    console.log('this is the message', msg)
}

// Make a request to the API
// The return value will be a string that will be echoed
if (require.main === module) {
    // weatherBot()
    new BootCLI()
}