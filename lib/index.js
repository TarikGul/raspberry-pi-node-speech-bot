#!/usr/bin/env node

const { ArgumentParser } = require('argparse');
const BootCLI = require('./boot/boot_cli');
const WeatherBot = require('./messaging/weather_messaging');
const GreetingsBot = require('./messaging/greeting_messaging');
const writeAudioTextToSpeech = require('../speech/text_to_speech');

const env = require('../config/enviornments');

const key = env.WEATHER_KEY;

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
    writeAudioTextToSpeech(msg, 'greeting-cheeky');
    console.log('[NODE_RESPONSE] ',msg);
}

const parser = new ArgumentParser({});

parser.add_argument('-b', '--bot', { choices: ['g', 'w', 'dev'], required: true, help: 'GreetingsBot(g) / WeatherBot(w)' })
parser.add_argument('-t', '--type', { choices: ['default', 'current'], required: false });

const args = parser.parse_args();

if (require.main === module) {
    if (args.bot === 'g') {
        greetingBot();
        return true
    } else if (args.bot === 'w') {
        weatherBot()
        return true
    } else if (args.bot === 'dev') {
        new BootCLI()
    }
    return true
}