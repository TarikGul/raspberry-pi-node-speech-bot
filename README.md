# My Raspberry PI project.

## UPDATES

I named the bot Cora

So I just got the Python Wrapper setup architected and the subthread processing the audio in parrallel running. Currently, I also have the node portion for the bot running on a sub thread as well. The main python wrapper thread will always have the sub thread running as the main thread interacts with Cora. 

I need to setup the greeting bot, and the standard audio file folder, as well as the check for current User on boot. This will allow us to change user names, and keep track of the current user using the bot.

## General `TODO`

X  ==> Completed
NO ==> Not doing it anymore/Not a priority.

[X]  Setup the Database for the Raspberry pi<br/>
[X]  Connect Node application to DB<br/>
[NO] Add Docker<br/>
[]   Draw out Diagram on what Data I want to track and how I am going to store it<br/>
[X]  Read about processing microphone speech into mp3.<br/>
[X]  In addition to the above, what speech to text tech I want to us (rev, google, watson)(Google cloud is the winner)<br/>
[NO] Also do I want to use SSML as my speech format so I can make it more realistic<br/>
[]   Build out aho corasick algorithm with word ranking algorithm I already built out a version of aho corasick in JS, but i need to implement it in Python<br/>
[]   Create the standard geeting bot with a standard audio folder with cached responses.<br/>
[]   

-- all valid things to get done this week along with everything else. 

## Hardware

- Raspberry Pi 3 B+
- AdaFruit I2S 3W Class D Amplifier Breakout - MAX98357A Kit
- 5V 2.5A Switching Power Supply with 20AWG MicroUSB Cable

## Goals

Design and create a Bot that will talk and listen to my voice, and also interact with me. 

Long term I would love to attach some sensors on to it, and track movement and collect biometric data of myself. 

## PART 1 - Weather BOT

We are starting simple and doing a weather bot first, just to get all the hardware running and working with the code. At the same time though, until my hardware gets here, ill be working on this as well as a word ranking system in order to work with certain bots we are making. 

This is a simple Bot that will interact with me about the weather.

### So whats the goal here

First we want to use google-clouds text to speech to take in text generated by the bot, capture it, return a audio file, then tell me the weather ever morning. To start off we'll do specific times of the day, or at intervals then we will replace that with the speech listening driver. 

Second, after we have a basic version working, I would like to attach a sensor to the kit, and only tell me the weather when I wake up. Cache the results, and wait until around the afternoon to tell me next.

The overall goal is to learn and architect myself what a good bot would be, and how I would want to configure something like this when it comes to farming my own data and applying deep learning to it. 

For now, I need to get the rest of the hardware in the mail, but I have the raspberry pi up and running with RaspbianOS, and will write out a working program in the next 3 days so I can just solder and start testing some basic things with the cool little speakers Ill be getting. 

[X] Build external weather api call<br/>
[X] Initiate a message Library<br/>
----[] Build a deeper messaging library<br/>
----[X] Caching and storing mechanism that will decide based off recent results<br/>
--------[] Need to set proper TTL results for the weather cache.
[] Get all speaker equipment [Link](https://www.adafruit.com/product/3006)<br> 
----[X] Ordered<br/>
--------[X] Adafruit I2S 3W Class D Amplifier Breakout - MAX98357A Kit<br/>
--------[X] soldering kit<br/>
--------[X] jumper cables<br/>
--------[X] soldering board<br/>
--------[] 3W 4Ohm speaker set

- I have ideas for this, but not totally sure yet what or how i want to implement them
- More on this once I finish the actual weather BOT

## PART 1.5 - Create a developer CLI that comes up at Boot. 

[X] Setup Boot CLI with Weather Bot, and Greeting Bot.


## PART 2 - Node Server, connect to device on my phone in order to change settings and whatnot. 

[X] Setup Node Server<br/>
----[] Give myself a good reason why I need this right now, or i delete it.<br/>

## PART 3 - Keyword ranking model

[] Write AhoCorasick Algorithm for word matchng in large text fields
[] Use python for the word matching 

``` javascript
// Question words can be used to rank a question
questionWords = [
    'what',
    'when',
    'why',
    'which',
    'who',
    'how',
    'whose',
    'whom'
]

// More to add as more bots come up
botWords = [
    'weather'
]

weatherWords = [
    'right',
    'now',
    'today',
    'sunny',
    'cloudy',
    'weather',
    'temperature',
    'tomorrow',
    'forecast',
    'projected',
]


```
etc.

## Part 4 - Audio Processing MultiThreading

All audio processing with be done in python. 

I finally connected to the audio driver on my mac for testing, but in linux it will be easy to connect.
MacOS Catalina blocks permission to the mic for the terminal. This command will help you get around that.


In order to get sox working in terminal to get permissions<br/>
run -> $open /System/Applications/Utilities/Terminal.app/Contents/MacOS/Terminal<br/>
    -> $rec new-file.wav


## Part 5 - On Boot Create User

On Boot we need to create a user. A User wont be a traditional 

## Part 6 - Using node-bot in a subthread 

I basically wrote all this out already but when it comes to the architecture of things, 
I have decided to make a the bot a subprocess of the audio processing python portion of the PI. 

## Requirements

`brew install swig`<br/>
`brew install wheel`<br/>
`brew install setuptools`<br/>

Python venv
