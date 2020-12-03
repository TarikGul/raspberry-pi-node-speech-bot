<h1 style="text-align: center;">My Raspberry PI project. <br/> Interactive Speech Recognition Bot: Cora</h1>

## What does Cora do?
Cora on boot will start listening in the background for keyword/keyword-phrase `hello` and `hello cora`. Coras main thread is a python wrapper, that has a sub-thread that runs all the audio-processing. The actual bot that writes the responses to the user is written in node. The audio processing subthread will trigger the main thread to call upon the node bot when necessary. The ranking algorithm so far is a aho-corasick word matching algorithm. As more complicated searching is developed for more real-time and random questions more implementations will be added. So far Cora will respond to weather questions, and has a greeting bot as well. 

NOTE: This bot can run locally on your machine, and does not require a raspberry pi. 

## Hardware Requirements

    If you wish to setup a Rapsberry Pi, the following is suggested: 
    - Raspberry Pi 3 B+
    - Micro SD card. Im using a 256 GB, more space the better
    - AdaFruit I2S 3W Class D Amplifier Breakout - MAX98357A Kit
    - 5V 2.5A Switching Power Supply with 20AWG MicroUSB Cable
    - 3W 1.5Ohm speakers (2) 

<h1 style="text-align: center;">Enviornment Setup</h1>

## MacOSX

    $brew install swig
    $brew install wheel
    $brew install setuptools

## Raspbian/Linux(Debian)

In order to get started with setting up your SD card with an IMAGE of the Raspbian OS, follow along the raspberry-pi forums tutorial.

[Setup-Link](https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up)</br>
[Configuration-Link](https://www.raspberrypi.org/documentation/configuration/)

    These will allow you to have pocketsphinx and the C wrappers necessary to run the speech recognition
    $apt-get update
    $apt-get upgrade
    $apt-get swig wheel setuptools

Now that your raspberry pi is setup. Lets share the docs, schematics, and tutorials for getting the amplifier module soldered and installed on your pi.

[Adafruit_Amplifier_guide](https://learn.adafruit.com/adafruit-speaker-bonnet-for-raspberry-pi)


## Local Env Setup

Enter the `audio_processing` directory and lets setup the virtual env.

    $python -m venv env
    $pip install -r requirements 

Now lets go back to our root directory and install all necessary npm packages

    $npm install

In order to get the google-text-to-speech working, follow along with their setup, and once you have the google-speech.json imported into the root directory you are all set and good to go. Just run the `boot.py` file in audio processing and the bot will run. 
