const messages = require('./util/weather_messages');

const env = require('../../config/enviornments');

// You can set your own default data in by passing it as an array, filled with
// a bunch of objects. These objects will have a bunch of options declaring what they
// are

class DefaultMessaging {
    // Data will be represented in a queue format 
    constructor(data=[], options={}) {
        this.data = [...data];
        this.options = {
            activated: false,
            ...options,
        };
    };

    _init() {
        // Lets check our options then decided what to do.
        // Will be a daily cycle of messages. 
    }

    statusError(status) {
        return `You have received a ${status} error.`;
    }

    loadingInformationDelay() {
        return `There seems to be a lot of traffic, I apologize.`;
    }
}