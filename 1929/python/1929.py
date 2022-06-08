# python 1929.py

class Solution(object):
    def getConcatenation(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        arr = []

        while (len(arr) < (len(nums) * 2)):
            arr += nums

        return arr

solution = Solution()
print(solution.buildArray([1, 2, 1]))
