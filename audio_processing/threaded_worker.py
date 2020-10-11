#!/usr/bin/env python3

# NOTE: this example requires PyAudio because it uses the Microphone class
import time
from threading import Thread
try:
    from queue import Queue  # Python 3 import
except ImportError:
    from Queue import Queue  # Python 2 import

import speech_recognition as sr
from binding_scripts import run_cora


r = sr.Recognizer()
audio_queue = Queue()


def recognize_worker():
    # this runs in a background thread
    while True:
        audio = audio_queue.get()  # retrieve the next audio processing job from the main thread
        if audio is None:
            print('sleeping for 5 seconds to wait for response');
            time.sleep(5)
            continue
            # break can stop processing if the main thread is done
        # received audio data, now we'll recognize it using CMUSphinx Recognition
        try:
            text = r.recognize_sphinx(audio)
            print("Google Speech Recognition thinks you said " + text)
            if text == 'hello':
                print('Kora recognized your hello')
                response = run_cora()
                if response is True:
                    print('Do something here')
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
