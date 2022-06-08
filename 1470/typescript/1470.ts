// tsc 1470.ts

function shuffle(nums: number[], n: number): number[] {
    let arr: number[] = [];

    for (let i:number = 0; i < n; i ++) {
        arr.push(nums[i]);
        arr.push(nums[i+n]);       
    }
    return arr;
};

console.log(shuffle([2,5,1,3,4,7], 3));
console.log(shuffle([1,2,3,4,4,3,2,1], 4));
console.log(shuffle([1,1,2,2], 2));