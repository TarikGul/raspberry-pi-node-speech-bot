#!/usr/bin/env node
// This is basically the controller for the raspberry pi
const { ArgumentParser } = require('argparse');
const { weatherData } = require('./external_api/weather');
const BootCLI = require('./boot/boot_cli');
const WeatherBot = require('./messaging/weather_messaging');
const GreetingsBot = require('./messaging/greeting_messaging');
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
    writeAudioTextToSpeech(msg, 'weather');
    console.log(msg)
}

const greetingBot = () => {
    const bot = new GreetingsBot();
    const msg = bot.constructMessage();
    // msg = 'You just said hello, are you okay? How can I help you?'
    writeAudioTextToSpeech(msg, 'greeting-cheeky');
    console.log('[NODE_RESPONSE] ',msg);
}

const parser = new ArgumentParser({});

parser.add_argument('-b', '--bot', { choices: ['g', 'w', 'dev'], required: true, help: 'GreetingsBot(g) / WeatherBot(w)' })
parser.add_argument('-t', '--type', { choices: ['default', 'current'], required: false });

const args = parser.parse_args();

// Make a request to the API
// The return value will be a string that will be echoed
if (require.main === module) {
    // each day i must enter my credentials
    // export GOOGLE_APPLICATION_CREDENTIALS=PATH
    if (args.bot === 'g') {
        greetingBot();
        return true
    } else if (args.bot === 'w') {
        weatherBot()
        return true
    } else if (args.bot === 'dev') {
        new BootCLI()
        // dont return anything, just enter dev mode.
        // dev mode is for testing 
    }
    console.log('hit the node application')
    return true
}