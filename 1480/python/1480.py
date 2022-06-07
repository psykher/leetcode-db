# python 1480.py

class Solution(object):
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        arr = []
        eSum = 0

        for e in nums:
            eSum += e
            arr.append(eSum)

        return arr


solution = Solution()
print(solution.runningSum([1, 2, 3, 4]))
