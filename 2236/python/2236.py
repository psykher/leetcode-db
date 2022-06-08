# python 2235.py

class TreeNode:
  def __init__(self, val, right, left):
    self.val = val
    self.right = right
    self.left = left

class Solution(object):
  def checkTree(self, root):
    """
    :type root: Optional[TreeNode]
    :rtype: bool
    """

    eSum = (root.left.val | 0) + (root.right.val | 0)

    return (True if (root.val == eSum) else False)

solution = Solution()
treeNode = TreeNode(5, TreeNode(3, 0, 0), TreeNode(1, 0, 0))

print(solution.checkTree(treeNode))
