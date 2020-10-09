import time
import speech_recognition as sr

# this is called from the background thread

def callback(recognizer, audio):
    # received audio data, now we'll recognize it using Google Speech Recognition
    try:
        print("CMU Sphinx Recognition thinks you said " +
              recognizer.recognize_sphinx(audio))
    except sr.UnknownValueError:
        print("Google Speech Recognition could not understand audio")
    except sr.RequestError as e:
        print(
            "Could not request results from Google Speech Recognition service; {0}".format(e))


r = sr.Recognizer()
m = sr.Microphone()

stop_listening = r.listen_in_background(m, callback)

# stop listening, wait for 5 seconds, then restart listening
print('There is a 5 second buffer before Kora starts listening')
stop_listening()
time.sleep(5)
print('You may start speaking')
stop_listening = r.listen_in_background(m, callback)

# do other things on the main thread
while True:
    time.sleep(0.1)

# To call speech_recognition from Command Line 
# $python -m speech_recognition
