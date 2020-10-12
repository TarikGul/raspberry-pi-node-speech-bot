#!/usr/bin/env node
const BotMessaging = require('./bot_messaging');

class GreetingBot extends BotMessaging {
    constructor() {
        super()
        this.timeOfDay = this._timeOfDay()
    }

    _timeOfDay() {
        const currTime = new Date();
        const hours = currTime.getHours();

        return hours;
    }

    constructMessage(hours) {
        if (hours >= 3 && hours <= 11) {
            return 'Good morning, how can i help you?';
        } else if (hours > 11 && hours <= 17) {
            return 'Good afternoon, how can i help you?';
        } else if (hours > 17 && hours <= 24) {
            return 'Good evening, how can i help you?';
        } else {
            return 'Oh wow its early, how can i help you?'
        }
    }
}

module.exports = GreetingBot;
