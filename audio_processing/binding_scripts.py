import os
import concurrent.futures
from multiprocessing.pool import ThreadPool
import threading
from Naked.toolshed.shell import execute_js, muterun_js



def run_cora():
    response = execute_js('../lib/index.js')
    return response

def stop_cora():
    print('stopped cora')

# Cant use the Virtual env in production when using Google Cloud
# Cant acces global env variables.
def setupVirtualEnv():
    os.system('source env/bin/activate')


