module.exports = {
    /**
     * Default weather greeting
     * @param {string} name => first_name
     * @param {string} temp
     * @param {string} city 
     */
    weatherGreeting: (name, weather, city) => {
        if (weather === 'Clouds') {
            weather = 'cloudy';
        };
        return `Hello ${name}. The weather in ${city} today is ${weather}.`;
    },

    /**
     * Default Temperature Reading
     * @param {integer} temp
     */
    tempReading: (temp, feelsLike) => {
        return `Looks like the current temperature is ${temp} degrees, but it feels like ${feelsLike}.`;
    },

    /**
     * This will give clothing advice based on temperature
     * Temp will be something like Hot, cold, perfect
     * @param {integer} tempRating
     * The tempRating will be from 0 - 10 0 being the coldes 10 being really hot 
     */
    clothingAdvice: (tempRating) => {
        // console.log(parseInt(tempRating))
        switch(tempRating) {
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
