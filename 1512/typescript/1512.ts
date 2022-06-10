// tsc 1512.ts
// node 1512.js

function numIdenticalPairs(nums: number[]): number {
    let pairs: number = 0;

    for (let i: number = 0; i < nums.length; i ++) {
        for (let j: number = i + 1; j < nums.length; j ++) {
            pairs += (nums[i] == nums[j]) ? 1 : 0;
        };
    };

    return pairs;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));
console.log(numIdenticalPairs([1,1,1,1]));
console.log(numIdenticalPairs([1,2,3]));
