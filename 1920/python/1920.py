# python 1920.py

class Solution(object):
    def buildArray(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        arr = []

        for i in range(len(nums)):
            arr.append(nums[nums[i]])

        return arr

solution = Solution()
print(solution.buildArray([0, 2, 1, 5, 3, 4]))
