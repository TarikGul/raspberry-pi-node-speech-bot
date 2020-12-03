// We are using the Aho Corasick Algorithm in order to see if the phrase we are being
// asked is a question or not.

// If the results come back as an empty array we know there was no match.

class AhoCorasick {
    constructor(keywords, text) {
        this.keywords = keywords;
        this.text = text;
        this._init();
    }

    _init() {
        this._buildTables(this.keywords);
    }

    _buildTables (keywords) {
        let gotoFn = {
            0: {}
        };
        let output = {};

        let state = 0;
        keywords.forEach(function (word) {
            let curr = 0;
            for (let i = 0; i < word.length; i++) {
                let l = word[i];
                if (gotoFn[curr] && l in gotoFn[curr]) {
                    curr = gotoFn[curr][l];
                } else {
                    state++;
                    gotoFn[curr][l] = state;
                    gotoFn[state] = {};
                    curr = state;
                    output[state] = [];
                }
            }

            output[curr].push(word);
        });

        let failure = {};
        let xs = [];

        // f(s) = 0 for all states of depth 1 (the ones from which the 0 state can transition to)
        for (let l in gotoFn[0]) {
            let state = gotoFn[0][l];
            failure[state] = 0;
            xs.push(state);
        }

        while (xs.length) {
            let r = xs.shift();
            // for each symbol a such that g(r, a) = s
            for (let l in gotoFn[r]) {
                let s = gotoFn[r][l];
                xs.push(s);

                // set state = f(r)
                let state = failure[r];
                while (state > 0 && !(l in gotoFn[state])) {
                    state = failure[state];
                }

                if (l in gotoFn[state]) {
                    let fs = gotoFn[state][l];
                    failure[s] = fs;
                    output[s] = output[s].concat(output[fs]);
                } else {
                    failure[s] = 0;
                }
            }
        }

        this.gotoFn = gotoFn;
        this.output = output;
        this.failure = failure;
    }

    _search(string) {
        let value = 0;
        let results = [];
        for (let i = 0; i < string.length; i++) {
            let l = string[i];
            while (value > 0 && !(l in this.gotoFn[value])) {
                value = this.failure[value];
            }

            // if (this.gotoFn[value] === undefined) continue;

            if (!(l in this.gotoFn[value])) {
                continue;
            }

            value = this.gotoFn[value][l];

            if (this.output[value].length) {
                let foundStrs = this.output[value];
                results.push([i, foundStrs]);
            }
        }

        return results;
    }

    run() {
        return this._search(this.text);
    }
}

const questionWords = [
    'what',
    'when',
    'why',
    'which',
    'who',
    'how',
    'whose',
    'whom'
];

const text = 'when is the weather like today is aspen what what what.I heard some really good things!'

const aho = new AhoCorasick(questionWords, text);
console.log(aho.run())

module.exports = AhoCorasick;
