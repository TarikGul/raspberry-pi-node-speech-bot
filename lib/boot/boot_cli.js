const env = require('../../config/enviornments');

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const WeatherBot = require('../messaging/weather_messaging');
const { askBotSelection, askForCityId } = require('./util/inquirer');

// The Boot CLI is a developer tool to see and manually test responses from 
// Pippen

// Make sure on boot that we check all things such as internet, hardware connections, 
// and tests. 
class BootCLI {
    constructor() {
        this._init();
    }

    _init() {
        this._welcomeMessage()
        this._presentBotSelection()
    }

    _welcomeMessage() {
        clear();

        console.log(
            chalk.yellow(
                figlet.textSync('Pippen', { horizontalLayout: 'full' })
            )
        );
        console.log(chalk.green('Welcome to Pippen, your very own speech bot.'))
        console.log(chalk.yellow('Lets get you started with this developer enviornment.'), )
    }

    async _presentBotSelection() {
        await askBotSelection() 
            .then((res) => {
                const answer = res['Bot-Selection'];
                if(answer === 'WeatherBot') {
                    this._retrieveCityId()
                        .then(cityId => {
                            this._runWeatherBot(cityId)
                        })
                } else if(answer === 'GreetingBot') {
                    console.log('Still in development')
                }
            })
    }

    async _retrieveCityId () {
        await askForCityId()
            .then(res => {
                return res['cityId'];
            })
    }

    async _runWeatherBot() {
        const key = this._checkForWeatherKey();
        if(!key) {
            this._errorRedirectToBotSelection();
            return;
        }

        const bot = new WeatherBot(5391959); // San Francisco CityId
        const msg = await bot.constructCurrentWeatherMessage();
        console.log(msg);
    }

    _checkForWeatherKey() {
        if(!env.WEATHER_KEY) {
            console.log(chalk.red('ERROR: '),chalk.yellow('It seems you are missing a Weather API key.'))
            console.log(chalk.yellow('Visit: https://openweathermap.org/api'));
            return false
        }

        return true
    }

    _errorRedirectToBotSelection() {
        console.log('Redirecting back to Bot Selection.');
        this._presentBotSelection();
    }  
}

module.exports = BootCLI;