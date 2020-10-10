const { exec } = require('child_process');
const path = require('path')

module.exports = {
    updateEnvVariable: (type, newName) => {
        if (type !== 'USER_NAME') {
            console.log('You do not have permission to change the inputed ENV type!');
            return false;
        }

        // Still thinking how i should store and update the users name after they changed it
        // Well be back to this one later
    },
    /**
     * Open terminal to get system priviledges
     */
    openTerminalThroughSytem:() => {
        exec('open /System/Applications/Utilities/Terminal.app/Contents/MacOS/Terminal');
    },
    /**
     * Run Audio Processing in the background
     */
    runBackGroundAudioProcessing: (back) => {
        let dir = __dirname;
        let str = '';
        for(let i = 0; i < back; i++) {
            str += '../';
        }
        exec(`python ${dir} + ${str} + audio_processing/live_background_recognition`);
    },
    /**
     * Run Audio Processing Directly Live
     */
    runLiveAudioProcessing: (back) => {
        let dir = __dirname;
        let str = '';
        for (let i = 0; i < back; i++) {
            str += '../';
        }
        exec(`python ${dir} + ${str} + audio_processing/live_recognition`);
    },
    /**
     * Record audio and save file
     * NOTE: This is if I use sox, if I use ALAS in linux, it must be arecord.
     */
    recordAudio: (fileName) => {
        exec(`rec ${fileName}`);
    },
    /**
     * Play Audio from terminal
     */
    playAudio: (fileName) => {
        exec(`afplay ${fileName}`);
    }
}