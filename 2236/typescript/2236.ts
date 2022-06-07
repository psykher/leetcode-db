// tsc 2236.ts
// node 2236.js

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function checkTree(root: TreeNode | null): boolean {
    let eSum = (root.left.val | 0) + (root.right.val | 0);

    return (root.val == eSum) ? true : false;
};

let treeNode: TreeNode = { val: 5, left: { val: 3, left: null, right: null }, right: { val: 1, left: null, right: null } };

console.log(checkTree(treeNode));