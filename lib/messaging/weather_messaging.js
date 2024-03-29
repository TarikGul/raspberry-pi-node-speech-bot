const tempRating = require('./util/temp_rating');
const { weatherData } = require('../external_api/weather');
const BotMessaging = require('./bot_messaging');
const Cache = require('../cache/cache');
const env = require('../../config/enviornments');

class WeatherBot extends BotMessaging {
    constructor(cityId) {
        super()
        this.time = new Date().getHours();
        this.cache = new Cache(100);
        this.cityId = cityId;
    }

    async _callWeatherAPI (key=env.WEATHER_KEY) {
        await weatherData(key)
            .then(data => {
                this.cache.set(`weather-data-${this.cityId}`,data);
            })
            .catch(err => {
                this.statusError(err.status);
            });
    }

    async constructCurrentWeatherMessage() {
        const cacheKey = `weather-data-${this.cityId}`;
        const value = this.cache.get(cacheKey);

        if(!value) {
            await this._callWeatherAPI();
        }

        let data = value || this.cache.get(cacheKey);

        const { name, main, weather } = data;
        const rating = tempRating(main.temp);

        const greeting        = this.weatherGreeting(this._userName, weather[0].main, name);
        const tellTemperature = this.tempReading(main.temp, main.feels_like);
        const clothingAdvice  = this.clothingAdvice(rating);  

        return [greeting, tellTemperature, clothingAdvice].join(' ');
    }

    resetCityId(cityId) {
        this.cityId = cityId;
    }

    weatherGreeting(name, weather, city) {
        if(weather === 'Clouds') {
            weather = 'cloudy';
        };
        return `Hello ${name}. The weather in ${city} today is ${weather}.`;
    }

    tempReading(temp, feelsLike) {
        return `Looks like the current temperature is ${temp} degrees, but it feels like ${feelsLike}.`;
    }

    clothingAdvice(tempRating) {
        switch (parseInt(tempRating)) {
            case -1:
                return 'Something went wrong...'
            case 0: //  -50 through -10 degrees
                return 'When its this cold you should probably stay inside. Whale blubber might be suitable for today.';
            case 1: // -9 through 5 degrees 
                return 'Today is extremely cold, so you should wear a parka, very thick socks, and probably some leggings underneath.';
            case 2: // 6 through 20
                return 'Today is the kind of day you should really bundle up with a jacket sweatshirt, and thick sock and leggings.';
            case 3: // 20 through 35
                return 'Today is gonna be cold but the type of weather it snows in and can still be comfortable.';
            case 4: // 36 through 45
                return 'Today is cold, bundle up. Could hit the thirties so...';
            case 5: // 46 through 55
                return 'Today would be a cold one in San Francisco, but a warm one Canada, so ill let you decide.';
            case 6: // 56 through 65
                return 'Today is going to be classic San Francisco weather. Should be perfect, where a hoodie.';
            case 7: // 66 through 75
                return 'Today is universal perfect weather if you\'re in the sun.';
            case 8: // 76 through 85
                return 'Today is going to be perfect. If you dont spend time outside I will know.';
            case 9: // 86 through 95
                return 'Today is going to make you sweat a lot. I would tell you to wear nothing but that might be rude.';
            case 10:
                return 'Today is a day of judgment. If your shoes melt to the ground it probably means you\'re going to hell';
            default:
                return 'Malfunctioning...';
        }
    }
}

module.exports = WeatherBot;
