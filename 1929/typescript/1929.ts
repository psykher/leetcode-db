// tsc 1929.ts
// node 1929.js 

function getConcatenation(nums: number[]): number[] {
    let arr: number[] = [];

    while (arr.length < (nums.length * 2)) {
        nums.map((num)=> {
            arr.push(num);
        });
    }

    return arr;
};

console.log(getConcatenation([1,2,1]));
