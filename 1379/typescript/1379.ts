// tsc 1379.ts
// node 1379.js

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

function getTargetCopy(original: TreeNode | null, cloned: TreeNode | null, target: TreeNode | null): TreeNode | null {
    if (!cloned) return null;

    if (cloned.val == target!.val) {
        return cloned;
    } else {
        return getTargetCopy(original, cloned.left, target) || getTargetCopy(original, cloned.right, target)
    }
};

// tree = [7,4,3,null,null,6,19], target = 3

let og1: TreeNode = {
    val: 7,
    left: { val: 4, right: null, left: null },
    right: {
        val: 3, right: {
            val: 6, right: null, left: null
        }, left: {
            val: 19, right: null, left: null
        }
    }
};

let c1: TreeNode = og1;

// tree = [7], target =  7

let og2: TreeNode = {
    val: 7,
    left: null,
    right: null
};

let c2: TreeNode = og2;

// tree = [8,null,6,null,5,null,4,null,3,null,2,null,1], target = 4

let og3: TreeNode = {
    val: 8,
    left: null,
    right: {
        val: 6, right: null, left: {
            val: 5, right: null, left: {
                val: 4, right: null, left: {
                    val: 3, right: null, left: {
                        val: 2, right: null, left: {
                            val: 1, right: null, left: null
                        }
                    }
                }
            }
        }
    }
};

let c3: TreeNode = og3;

console.log(getTargetCopy(og1, c1, { val: 3, left: null, right: null }));
console.log(getTargetCopy(og2, c2, { val: 7, left: null, right: null }));
console.log(getTargetCopy(og3, c3, { val: 4, left: null, right: null }));
