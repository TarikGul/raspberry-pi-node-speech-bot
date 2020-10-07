const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

module.exports = {
    PORT: process.env.PORT,
    WEATHER_KEY: process.env.WEATHER_KEY,
    USER_NAME: process.env.USER_NAME,
    DB_NAME: process.env.DB_NAME,
    DB_USER_NAME: process.env.DB_USER_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD
}
