import NodeCache from 'node-cache'

class Cache {
    constructor(ttlSeconds) {
        this.cache = new NodeCache({ 
            stdTTL: ttlSeconds, 
            checkperiod: ttlSeconds * 0.2, 
            useClones: false 
        });
    }
    /**
     * Setter
     * @param {string} keyName 
     * @param {object} obj 
     */

    set(keyName, obj) {
        this.cache.set(keyName, obj);
    }
    /**
     * 
     * @param {string} keyName 
     */
    get(keyName) {
        this.cache.get(keyName)
    }
}

module.exports = Cache;