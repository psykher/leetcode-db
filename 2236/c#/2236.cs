// mcs -out:2236.exe 2236.cs
// mono 2236.exe

using System;

public class TreeNode
{
    public int val;

    public TreeNode left;

    public TreeNode right;

    public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
    {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution
{
    public bool CheckTree(TreeNode root)
    {
        int eSum = (root.left.val | 0) + (root.right.val | 0);
        return (root.val == eSum) ? true : false;
    }

    static void Main(string[] args)
    {
        Solution solution = new Solution();
        TreeNode treeNode =
            new TreeNode(5,
                new TreeNode(3, null, null),
                new TreeNode(1, null, null));

        Console.WriteLine(solution.CheckTree(treeNode));
    }
}
