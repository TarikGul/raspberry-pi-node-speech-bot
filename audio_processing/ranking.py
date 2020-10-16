"""
Section: WORD RANKING
This word ranking algorithm will return text. It will be a keyword denoting which bot to use

We first determine if there is anything in the hello_cache and if the text is equal to hello or oh

"""

def word_ranking(hello_cache: object, text: str) -> int:

    # Check for a greeting
    if hello_cache.currize == 0 and (text == 'hello' or text == 'oh'):
        return 'hello'

    question_words = [
        'what',
        'when',
        'why',
        'which',
        'who',
        'how',
        'whose',
        'whom'
    ]


    

class AhoCorasick:

    def __init__(self, keywords, text):
        self.keywords = keywords
        self.text = text
        self._boot()

    def _boot(self):
        self._build_tables()
    
    def _build_tables(self):
        goto_fn = {
            0: {}
        }
        output = {}
        state = 0

        for word in self.keywords:
            curr = 0
            for i in range(len(word)):
                l = word[i]
                if goto_fn[curr] and l in goto_fn[curr]:
                    curr = goto_fn[curr][l]
                else:
                    state += 1
                    goto_fn[curr][l] = state
                    goto_fn[state] = {}
                    curr = state
                    output[state] = []
            output[curr].append(word)
        
        failure = {}
        xs = []

        for l in goto_fn[0]:
            state = goto_fn[0][l]
            failure[state] = 0
            xs.append(state)
        
        while len(xs) is not 0:
            r = xs.pop(0)

            for l in goto_fn[r]:
                s = goto_fn[r][l]
                xs.append(s)

                state = failure[r]
                while state > 0 and l not in goto_fn[state]:
                    state = failure[state]
                
                if l in goto_fn[state]:
                    fs = goto_fn[state][l]
                    failure[s] = fs
                    output[s] = output[s] + output[fs]
                else:
                    failure[s] = 0
                
        self.goto_fn = goto_fn
        self.output = output
        self.failure = failure
    
    def _search(self, string):
        value = 0
        results = []
        for i in range(len(string)):
            l = string[i]
            while value > 0 and l not in self.goto_fn[value]:
                value = self.failure[value]
            
            if l not in self.goto_fn[value]:
                continue

            value = self.goto_fn[value][l]

            if len(self.output[value]) > 0:
                foundStrs =self.output[value]
                results.append([i, foundStrs])
        
        return results

    def run(self):
        return self._search(self.text)

if __name__ == "__main__":
    questionWords = [
        'what',
        'when',
        'why',
        'which',
        'who',
        'how',
        'whose',
        'whom'
    ]

    text = 'when is the weather like today is aspen what what what.I heard some really good things!'

    aho = AhoCorasick(questionWords, text)
    print(aho.run())

    


    
    
