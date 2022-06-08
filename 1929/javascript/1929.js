// node 1929.js

var getConcatenation = function (nums) {
    let arr = [];

    while (arr.length < (nums.length * 2)) {
        nums.map((num) => {
            arr.push(num);
        });
    }

    return arr;
};

console.log(getConcatenation([1, 2, 1]));
