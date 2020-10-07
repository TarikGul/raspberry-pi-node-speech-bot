# My Raspberry PI project.

## UPDATES

First, I am considering naming this bot. So far the two names I have thought of are Merry, and Pippen. Both are characters from the Lord of the Rings, and both are excellent sidekicks. 

Second, Today I am deciding how I want to structure this bot, and if I want to do a class Inheritance structure, or pure functional. I am leaning more so on the side of pure functional, and letting a lot of the logic be seperate from eachother and accessed on command via speech. That means I would always have to have one process running/listening such as a webhook, but instead for a driver. I need to do more research on this `TODO`!!!

## General `TODO`

[X] Setup the Database for the Raspberry pi<br/>
[X] Connect Node application to DB<br/>
[] Add Docker<br/>
[] Draw out Diagram on what Data I want to track and how I am going to store it<br/>
[] Read about processing microphone speech into mp3.<br/>
[X] In addition to the above, what speech to text tech I want to us (rev, google, watson)(Google cloud is the winner)<br/>
[] Also do I want to use SSML as my speech format so I can make it more realistic<br/>

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
[] Get all speaker equipment [Link](https://www.adafruit.com/product/3006<br> 
----[X] Ordered<br/>
--------[] Adafruit I2S 3W Class D Amplifier Breakout - MAX98357A Kit<br/>
--------[] soldering kit<br/>
--------[] jumper cables<br/>
--------[] soldering board<br/>

- I have ideas for this, but not totally sure yet what or how i want to implement them
- More on this once I finish the actual weather BOT

## PART 2 - Node Server, connect to device on my phone in order to change settings and whatnot. 

[X] Setup Node Server<br/>
----[] Give myself a good reason why I need this right now, or i delete it.<br/>

