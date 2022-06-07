// node 1480.js 

var runningSum = function(nums) {
    let arr = [];
    let eSum = 0

    nums.map((e) => {
        eSum += e;
        arr.push(eSum);
    });

    return arr;
};

console.log(runningSum([1, 2, 3, 4]));