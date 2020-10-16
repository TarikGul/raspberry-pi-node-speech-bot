#!/usr/bin/env python3

# NOTE: this example requires PyAudio because it uses the Microphone class
import time
from threading import Thread
try:
    from queue import Queue  # Python 3 import
except ImportError:
    from Queue import Queue  # Python 2 import

import speech_recognition as sr
from binding_scripts import run_cora, run_greeting_audio
from cachetools import TTLCache

r = sr.Recognizer()
audio_queue = Queue()

# Step 1:
# Setup a cache to store when we start with a hello, and give it a 6 second TTL

# Step 2:
# Do Aho Corasick Word matching. only if the first cache is a 'hello';

# Step 3: 
# Structure an algorithm to find out what kind of bot we are looking for, and the details for the bot too

# Also dont forget to write a greeting bot that will run after Saying hello
# This could be as simple as writing an audio file with my name, and giving a message back
# But if you want to you can make a node bot for it too that will give a custom message back

# This runs in a background thread
def recognize_worker():
    # Cache the hello response on for <6 seconds>
    hello_cache = TTLCache(10, 6, timer=time.monotonic, getsizeof=None)
    # Cache the response time for asking a question <10 seconds>
    response_cache = TTLCache(10, 10, timer=time.monotonic, getsizeof=None)

    while True:
        audio = audio_queue.get()  # retrieve the next audio processing job from the main thread
        if audio is None:
            print('[SLEEPING] microphone is sleeping for 2 seconds');
            time.sleep(2)
            continue
            # break can stop processing if the main thread is done
        # received audio data, now we'll recognize it using CMUSphinx Recognition
        try:
            text = r.recognize_sphinx(audio)
            print("Google Speech Recognition thinks you said " + text)

            """
            Section: WORD RANKING
            This is the word ranking section of the thread. It will return a string
            that will denote what the bot should do. 

            NOTE I am not sure if I should also run this on another thread, and not
            the same one as the audio_processing
            """

            # This will be our decision Tree
            #
            # This will basically decide if we are going to do the hello bot
            # or weather bot. We will implement a search bot soon.

            """
            Section: HELLO CORA
            This is the 'HELLO CORA' portion of the bot, and interacts with:
            -> GreetingBot
            """
            is_hello_cached = hello_cache.currsize
            if(is_hello_cached == 1 and text == 'hello'):
                # Run the 'You just said hello whats up?' message
                run_greeting_audio('-cheeky')
                continue
            elif is_hello_cached == 0 and text == 'hello':
                print('[RECOGNIZED]: Kora recognized your hello')

                # Set the TTLCache to a 6 second timer
                hello_cache.__setitem__('hello', True)

                response = run_cora()
                run_greeting_audio()
                if response is True:
                    audio_queue.put(None)
                    continue

            print('You actually said: ', text)
        except sr.UnknownValueError:
            print("Google Speech Recognition could not understand audio")
        except sr.RequestError as e:
            print(
                "Could not request results from Google Speech Recognition service; {0}".format(e))

        audio_queue.task_done()  # mark the audio processing job as completed in the queue

    print('hit the werd part of the function')
    return False


# start a new thread to recognize audio, while this thread focuses on listening
recognize_thread = Thread(target=recognize_worker)
recognize_thread.daemon = True
recognize_thread.start()

with sr.Microphone() as source:
    try:
        while True:  # repeatedly listen for phrases and put the resulting audio on the audio processing job queue
            print(recognize_thread)
            audio_queue.put(r.listen(source))
            print('audio queue', audio_queue)
        print('hit false')
    except KeyboardInterrupt:  # allow Ctrl + C to shut down the program
        pass

audio_queue.join()  # block until all current audio processing jobs are done
audio_queue.put(None)  # tell the recognize_thread to stop
recognize_thread.join()  # wait for the recognize_thread to actually stop
