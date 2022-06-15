// tsc 771.ts
// node 771.js

function numJewelsInStones(jewels: string, stones: string): number {
    let pattern: RegExp = new RegExp(jewels.split('').join('|'), 'g');
    let typesArr: RegExpMatchArray = (stones.match(pattern) || []);
    let sTypes: number = typesArr.length;

    return sTypes;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
