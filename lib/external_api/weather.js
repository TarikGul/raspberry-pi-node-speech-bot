const axios = require('axios');

const weatherURL = (key, cityId) => `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${key}&units=imperial`;

const weatherData = async (key, cityId = 5391959) => { // => San Francisco ID with openweatherAPI
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    
    const url = weatherURL(key, cityId);
    const errors = {};
    let res = await axios.get(url).catch(err => {
        errors.message = err.message
        console.log(err);
    });

    return res.data || {errors};
}

module.exports = {
    weatherData
};
