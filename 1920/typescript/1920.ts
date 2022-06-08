// tsc 2235.ts
// node 2235.js 

function buildArray(nums: number[]): number[] {
    let arr: number[] = [];

    for (let i: number = 0; i < nums.length; i++) {
        arr.push(nums[nums[i]]);
    }

    return arr;
};

console.log(buildArray([0, 2, 1, 5, 3, 4]));
