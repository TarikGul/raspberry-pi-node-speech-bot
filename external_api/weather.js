const axios = require('axios');

require('dotenv').config({ path: '../.env' });

const weatherURL = (key, cityId) => {
    return `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}`
};

const weatherData = async (key) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    const cityId = 1689969; // => San Francisco ID with openweatherAPI
    const url = weatherURL(key, cityId);
    // await the result if there is an error then console it
    let res = await axios.get(url).catch(err => {
        console.log(err);
    });

    return res.data;
}

module.exports = {
    weatherData
};
