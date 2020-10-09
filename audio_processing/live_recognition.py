import time
import speech_recognition as sr
from binding_scripts import run_cora

# this is called from the background thread

def boot_countdown():
    print('There is a 5 second buffer before Kora starts listening')
    i = 5
    for _ in range(5):
        print(i)
        i = i - 1
        time.sleep(1)
    print('You may start speaking')


def callback(recognizer, audio):
    # received audio data, now we'll recognize it using Google Speech Recognition
    try:
        text = recognizer.recognize_sphinx(audio)
        if text == 'hello cora':
            run_cora()
        print("CMU Sphinx Recognition thinks you said " + text)
    except sr.UnknownValueError:
        print("CMU Sphinx Recognition could not understand audio")
    except sr.RequestError as e:
        # This will only happen if 
        print(
            "Could not request results from Google Speech Recognition service; {0}".format(e))

def live_recognition():
    r = sr.Recognizer()
    m = sr.Microphone()

    stop_listening = r.listen_in_background(m, callback)

    stop_listening()

    boot_countdown()

    stop_listening = r.listen_in_background(m, callback)

    while True:
        # do other things on the main thread!
        time.sleep(0.1)

# To call speech_recognition from Command Line 
# $python -m speech_recognition
