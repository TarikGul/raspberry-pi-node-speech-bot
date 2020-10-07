const BotMessagingUtility = require('./bot_messaging_utility');

class BotMessaging extends BotMessagingUtility {
    constructor() {
        super()
    }

    statusError(status) {
        return `You have received a ${status} error.`;
    }

    loadingInformationDelay() {
        return `There seems to be a lot of traffic, I apologize.`;
    }
}

module.exports = BotMessaging;