const axios = require('axios');

const weatherURL = (key, cityId) => {
    return `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}&units=imperial`
};

const weatherData = async (key) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    const cityId = 5391959; // => San Francisco ID with openweatherAPI
    const url = weatherURL(key, cityId);
    const errors = {};
    // await the result if there is an error then console it
    let res = await axios.get(url).catch(err => {
        errors.message = err.message
        console.log(err);
    });

    return res.data || {errors};
}

module.exports = {
    weatherData
};
