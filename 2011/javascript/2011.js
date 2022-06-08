// tsc 2011.js

function finalValueAfterOperations(operations) {
    let xVal = 0;

    operations.map((str) => {
        xVal += str.match(/^.*\++.*$/) ? 1 : -1;
    });

    return xVal;
};

console.log(finalValueAfterOperations(["++X", "++X", "X++"]));
console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
