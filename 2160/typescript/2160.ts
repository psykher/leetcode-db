// tsc 2160.ts
// node 2160.js

function minimumSum(num: number): number {
    let sNum: string = num.toString().split('').map(function (sNum) {
        return parseInt(sNum, 10);
    }).sort((a, b) => a - b).toString().replace(/\,/g, "");

    let mSum: number = Number(sNum[0] + sNum[3]) + Number(sNum[1] + sNum[2]);

    return mSum;
};

console.log(minimumSum(2932));
console.log(minimumSum(4009));
