const env = require('../../config/enviornments');

class BotMessagingUtility {
    constructor() {
        this.userName = env.USER_NAME;
    }

    _init() {

    }

    // Could have functions to change name, and this would call a child process 
    // to change the value of an env variable, and in local state. 
    changeUserName() {

    }
}

module.exports = BotMessagingUtility;

