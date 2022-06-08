# 1470.py

from ast import For


class Solution(object):
    def shuffle(self, nums, n):
        """
        :type nums: List[int]
        :type n: int
        :rtype: List[int]
        """

        arr = []

        for i in range(n):
            arr.append(nums[i])
            arr.append(nums[i+n])

        return arr


solution = Solution()

print(solution.shuffle([2, 5, 1, 3, 4, 7], 3))
print(solution.shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4))
print(solution.shuffle([1, 1, 2, 2], 2))
