// tsc 1480.ts
// node 1480.js 

function runningSum(nums: number[]): number[] {
    let arr: number[] = [];
    let eSum = 0

    nums.map((e) => {
        eSum += e;
        arr.push(eSum);
    });

    return arr;
};

console.log(runningSum([1, 2, 3, 4]));
