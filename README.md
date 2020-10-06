# My Raspberry PI project.

## PART 1 - Weather BOT

Theres a lot going on with this one.

The first part though I am building a alexa style PI that will tell me all the 
weather information per day.

Note if you want to run or test this out yourself you must get a weathermap key;

### So whats the goal here

First we want to use google-clouds text to speech to capture and tell me the weather ever morning. To start off we'll do specific times of the day. 

Second, after we have a basic version working, I would like to attach a sensor to the kit, and only tell me the weather when I wake up. Cache the results, and wait until around the afternoon to tell me next.

The overall goal is to learn and architect myself what a good bot would be, and how I would want to configure something like this when it comes to farming my own data and applying to deep learning to it. 

For now, I need to get the rest of the hardware in the mail, but I have the raspberry pi up and running with RaspbianOS, and will write out the program in the next 3 days so I can just solder and start testing some basic things with the cool little speaks Ill be getting. 

[X] Build external weather api call
[X] Initiate a message Library
    [] Build a deeper messaging library
    [] Caching and storing mechanism that will decide based off recent results
[] Get all speaker equipment [Link](https://www.adafruit.com/product/3006)
    [] Ordered
        [] Adafruit I2S 3W Class D Amplifier Breakout - MAX98357A Kit
        [] soldering kit
        [] jumper cables

- I have ideas for this, but not totally sure yet what or how i want to implement them
- More on this once I finish the actual weather BOT

## PART 2 - Node Server, connect to device on my phone in order to change settings and whatnot. 

[X] Setup Node Server

