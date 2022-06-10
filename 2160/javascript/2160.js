// node 2160

var minimumSum = function (num) {
    var sNum = num.toString().split('').sort(function (a, b) { return a - b; }).toString().replace(/\,/g, "");
    var mSum = (Number(sNum[0] + sNum[3]) + Number(sNum[1] + sNum[2]));

    return mSum;
}

console.log(minimumSum(2932));
console.log(minimumSum(4009));
