// tsc 2011.ts
// node 2011.js

function finalValueAfterOperations(operations: string[]): number {
    let xVal: number = 0;

    operations.map((str) => {
        xVal += str.match(/^.*\++.*$/) ? 1 : -1;
    });

    return xVal;
};

console.log(finalValueAfterOperations(["++X", "++X", "X++"]));
console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
