// node 1431.js

var kidsWithCandies = function (candies, extraCandies) {
    let resArr = [];
    let maxCandy = candies.slice().sort((a, b) => a - b)[candies.length - 1];

    candies.map((candy) => {
        resArr.push(((candy + extraCandies) >= maxCandy) ? true : false);
    });

    return resArr;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
