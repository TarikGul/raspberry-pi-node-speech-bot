import os
import threading
from multiprocessing.pool import ThreadPool
from Naked.toolshed.shell import execute_js, muterun_js

def run_cora():
    response = execute_js('../lib/index.js', arguments='-b g')
    return response

def stop_cora():
    print('stopped cora')

# Cant use the Virtual env in production when using Google Cloud
# Cant acces global env variables.
def setupVirtualEnv():
    os.system('source env/bin/activate')


