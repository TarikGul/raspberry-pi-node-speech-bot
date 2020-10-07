const { exec } = require('child_process');
const path = require('path')

module.exports = {
    updateEnvVariable: (type, newString) => {
        if (type !== 'USER_NAME') {
            console.log('You do not have permission to change the inputed ENV type!');
            return false;
        }

        // Still thinking how i should store and update the users name after they changed it
        // Well be back to this one later
    }
}