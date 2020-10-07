const env = require('../../config/enviornments');

class BotMessagingUtility {
    constructor() {
        this._userName = env.USER_NAME;
        this._weatherKey = env.WEATHER_KEY;
    }

    _init() {

    }

    // Could have functions to change name, and this would call a child process 
    // to change the value of an env variable, and in local state. 
    changeUserName() {

    }
}

module.exports = BotMessagingUtility;

