module.exports = {
    /**
     * Default weather greeting
     * @param {string} => name => first_name
     * @param {string} => temp
     * @param {string} => city 
     */
    weatherGreeting: (name, weather, city) => {
        if (weather === 'Clouds') {
            weather = 'cloudy';
        };
        return `Hello ${name}. The weather in ${city} today is ${weather}.`;
    },

    /**
     * Default Temperature Reading
     * @param {integer} => temp
     */
    tempReading: (temp, feelsLike) => {
        return `Looks like the current temperature is ${temp} degrees, but it feels like ${feelsLike}.`;
    },

    /**
     * This will give clothing advice based on temperature
     * Temp will be something like Hot, cold, perfect
     * @param {string} => temp
     */
    clothingAdvice: (temp) => {

    }

}