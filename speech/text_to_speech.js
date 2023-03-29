const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const path = require('path');
const util = require('util');
const client = new textToSpeech.TextToSpeechClient();

const writeAudioTextToSpeech = async (text, fileTypeName) => {
    const request = {
        input: { text: text },
        voice: { languageCode: 'en-GB', ssmlGender: 'FEMALE', voiceName: 'en-GB-Wavenet-C' },
        audioConfig: { audioEncoding: 'MP3' },
    };
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(path.join(__dirname, `../audio_files/${fileTypeName}.mp3`), response.audioContent, 'binary');
    console.log('Audio content written to file: output.mp3');
}

module.exports = writeAudioTextToSpeech;