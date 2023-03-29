const NodeCache = require('node-cache')

class Cache {
    constructor(ttlSeconds, options) {
        this.cache = new NodeCache({ 
            stdTTL: ttlSeconds, 
            checkperiod: ttlSeconds * 0.2, 
            useClones: false 
        });
        this.ttlSeconds = ttlSeconds 
        this.options = {...options}
    }
    
    /**
     * Setter
     * @param {string} keyName 
     * @param {object} obj 
     */
    set(keyName, obj) {
        const value = this.cache.get(keyName);

        if (value === undefined) {
            this.cache.set(keyName, obj);
        } else {
            // Reset the keyname, and reset the timer. 
            this.cache.del(keyName);
            this.cache.set(keyName, obj);
            this.cache.ttl = this.ttlSeconds;
        }
    }
    /**
     * @param {string} keyName 
     */
    get(keyName) {
        const value = this.cache.get(keyName);

        if(value !== undefined) {
            return value;
        }
        return false
    }
}

module.exports = Cache;