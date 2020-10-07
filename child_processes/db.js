const { exec } = require('child_process');

module.exports = {
    /**
     * Restart the database
     */
    restartDB: () => {
        exec('sudo service postgresql restart')
    }
}