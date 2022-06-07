// node 2236.js

var checkTree = function (root) {
    let eSum = (root.left.val | 0) + (root.right.val | 0);

    return (root.val == eSum) ? true : false;
};

let treeNode = { val: 5, left: { val: 3, left: null, right: null }, right: { val: 1, left: null, right: null } };

console.log(checkTree(treeNode));
