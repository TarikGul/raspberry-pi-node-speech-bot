class WordNode {
    constructor(word, parentBot) {
        this.word = word;
        this.edges = {};
        this.parentBot = parentBot;
    }

    addEdge(obj) {
        // Simple add for now, will do more checks later.
        const key = obj.word;

        this.edges[key] = obj;
    }
}

module.exports = WordNode;