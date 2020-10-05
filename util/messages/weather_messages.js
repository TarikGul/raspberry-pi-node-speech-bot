modules.exports = {
    /**
     * Default weather greeting
     * @param {string} => name
     * @param {string} => temp
     * @param {string} => city 
     */
    weatherGreeting: (name, weather, city) => {
        return `Hello ${name}. The weather in ${city} today is ${weather}`;
    },

    /**
     * Default Temperature Reading
     * @param {integer} => temp
     */
    tempReading: (temp) => {
        return `Looks like the current temperature is ${temp} Degrees.`;
    },

    /**
     * This will give clothing advice based on temperature
     * Temp will be something like Hot, cold, perfect
     * @param {string} => temp
     */
    clothingAdvice: (temp) => {

    }

}