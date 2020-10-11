import time
import threading
import sys
import queue
import speech_recognition as sr
from binding_scripts import run_cora


def boot_countdown():
    print('There is a 5 second buffer before Kora starts listening')
    i = 5
    for _ in range(2):
        print(i)
        i = i - 1
        time.sleep(1)
    print('You may start speaking')


def callback(recognizer, audio):
    # received audio data, now we'll recognize it using Google Speech Recognition
    try:
        text = recognizer.recognize_sphinx(audio)
        if text == 'hello' or text == 'oh':
            print("You successfully said hello or oh: -> " + text)
            run_bot_result = run_cora()
            
            # sys.exit()    
        print("CMU Sphinx Recognition thinks you said " + text)
    except sr.UnknownValueError:
        print("CMU Sphinx Recognition could not understand audio")
    except sr.RequestError as e:
        # This will only happen if we are using the google speech API
        # Instead we are using pocketsphinx locally
        print(
            "Could not request results from Google Speech Recognition service; {0}".format(e))

def live_background_recognition():
    r = sr.Recognizer()
    m = sr.Microphone()

    with m as source:
        r.adjust_for_ambient_noise(source)

    stop_listening = r.listen_in_background(m, callback)

    stop_listening()

    boot_countdown()

    stop_listening = r.listen_in_background(m, callback)

    while threading.active_count() > 1:
        # do other things on the main thread!
        time.sleep(0.1)

    return

# To call speech_recognition from Command Line 
# $python -m speech_recognition
