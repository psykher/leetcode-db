# python 1672.py

import re

class Solution(object):
    def maximumWealth(self, accounts):
        """
        :type accounts: List[List[int]]
        :rtype: int
        """
        hb = 0

        for customer in accounts:
            bb = 0
            for balance in customer:
                bb += balance
            hb = bb if (bb > hb) else hb

        return hb


solution = Solution()

op1 = [[1, 2, 3], [3, 2, 1]]
op2 = [[1, 5], [7, 3], [3, 5]]

print(solution.maximumWealth(op1))
print(solution.maximumWealth(op2))
