// node 771.js

var numJewelsInStones = function (jewels, stones) {
    let pattern = new RegExp(jewels.split('').join('|'), 'g');
    let typesArr = (stones.match(pattern) || []);
    let sTypes = typesArr.length;

    return sTypes;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
