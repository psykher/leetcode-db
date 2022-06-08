// node 2114.js

var mostWordsFound = function(sentences) {
    let maxWords = 0;

    sentences.map((sentence) => {
        maxWords = (maxWords < sentence.split(" ").length) ? sentence.split(" ").length : maxWords;
    });

    return maxWords;
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]));
