import NodeCache from 'node-cache'

class Cache {
    constructor(ttlSeconds) {
        this.cache = new NodeCache({ 
            stdTTL: ttlSeconds, 
            checkperiod: ttlSeconds * 0.2, 
            useClones: false 
        });
    }

    // Write a setter
    set() {

    }
    // Write a getter
    get() {

    }
}

module.exports = Cache;