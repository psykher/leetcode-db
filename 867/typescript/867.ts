// tsc 867.ts
// node 867.js

function transpose(matrix: number[][]): number[][] {
    let tMat: number[][] = [];
    let eMat: number[];

    for (let i: number = 0; i < matrix[0].length; i++) {
        eMat = [];
        for (let j: number = 0; j < matrix.length; j++) {
            eMat.push(matrix[j][i]!);
        }

        tMat.push(eMat!);
    }

    return tMat;
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(transpose([[1, 2, 3], [4, 5, 6]]));
