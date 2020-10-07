const { exec } = require('child_process');
const path = require('path')

module.exports = {
    /**
     * Restart the database
     */
    restartDB: () => {
        exec('sudo service postgresql restart')
    }
}