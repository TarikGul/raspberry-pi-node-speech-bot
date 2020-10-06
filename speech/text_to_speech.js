// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Import other required libraries
const fs = require('fs');
const path = require('path');
const util = require('util');
// Creates a client
const client = new textToSpeech.TextToSpeechClient();

const writeAudioTextToSpeech = async (text) => {
    // Construct the request
    const request = {
        input: { text: text },
        // Select the language and SSML voice gender (optional)
        voice: { languageCode: 'en-GB', ssmlGender: 'FEMALE', voiceName: 'en-GB-Wavenet-C' },
        // select the type of audio encoding
        audioConfig: { audioEncoding: 'MP3' },
    };

    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);
    // Write the binary audio content to a local file
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(path.join(__dirname, 'output.mp3'), response.audioContent, 'binary');
    console.log('Audio content written to file: output.mp3');
}

module.exports = writeAudioTextToSpeech;