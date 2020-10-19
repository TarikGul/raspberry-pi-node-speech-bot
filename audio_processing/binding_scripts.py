import os
import threading
from multiprocessing.pool import ThreadPool
from Naked.toolshed.shell import execute_js, muterun_js, execute

def run_cora():
    response = execute_js('../lib/index.js', arguments='-b g')
    return response

def run_weather_cora():
    response = execute_js('../lib/index.js', arguments='-b w')
    return response

"""
Section: Running Audio
MACOSX: Use afplay for testing and running locally.
RASPBIAN: Use omxplayer, or pyaudio script.
"""
def run_weather_audio():
    response = execute('afplay ../audio_files/weather.mp3')
    return response

def run_greeting_audio(optionType=''):
    response = execute('afplay ../audio_files/greeting{}.mp3'.format(optionType))
    return response

def stop_cora():
    print('stopped cora')

# Cant use the Virtual env in production when using Google Cloud
# Cant acces global env variables.
def setupVirtualEnv():
    os.system('source env/bin/activate')


