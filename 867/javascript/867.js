// node 867.js

var transpose = function (matrix) {
    let tMat = [];
    let eMat;

    for (let i = 0; i < matrix[0].length; i++) {
        eMat = [];
        for (let j = 0; j < matrix.length; j++) {
            eMat.push(matrix[j][i]);
        }

        tMat.push(eMat);
    }

    return tMat;
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose([[1, 2, 3], [4, 5, 6]]));
