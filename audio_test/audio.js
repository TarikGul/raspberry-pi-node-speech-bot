const mic = require('mic');
const fs = require('fs');
const utilities = require('../child_processes/user');

/**
 * In order to get sox working in terminal to get permissions
 * run -> $open /System/Applications/Utilities/Terminal.app/Contents/MacOS/Terminal
 *     -> $sox -d -d
 */

const micInstance = mic({
    rate: '16000',
    channels: '1',
    debug: true,
    exitOnSilence: 6
});

const micInputStream = micInstance.getAudioStream();

const outputFileStream = fs.WriteStream('output.raw');

micInputStream.pipe(outputFileStream);

micInputStream.on('data', function (data) {
    console.log("Recieved Input Stream: " + data.length);
});

micInputStream.on('error', function (err) {
    cosole.log("Error in Input Stream: " + err);
});

micInputStream.on('startComplete', function () {
    console.log("Got SIGNAL startComplete");
    setTimeout(function () {
        micInstance.pause();
    }, 5000);
});

micInputStream.on('stopComplete', function () {
    console.log("Got SIGNAL stopComplete");
});

micInputStream.on('pauseComplete', function () {
    console.log("Got SIGNAL pauseComplete");
    setTimeout(function () {
        micInstance.resume();
    }, 5000);
});

micInputStream.on('resumeComplete', function () {
    console.log("Got SIGNAL resumeComplete");
    setTimeout(function () {
        micInstance.stop();
    }, 5000);
});

micInputStream.on('silence', function () {
    console.log("Got SIGNAL silence");
});

micInputStream.on('processExitComplete', function () {
    console.log("Got SIGNAL processExitComplete");
});

micInstance.start();