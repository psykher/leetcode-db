# python 2011.py

import re

class Solution(object):
    def finalValueAfterOperations(self, operations):
        """
        :type operations: List[str]
        :rtype: int
        """
        xVal = 0

        for e in operations:
            xVal += 1 if re.match("^.*\++.*$", e) else -1

        return xVal


solution = Solution()

op1 = ["++X", "++X", "X++"]
op2 = ["--X", "X++", "X++"]

print(solution.finalValueAfterOperations(op1))
print(solution.finalValueAfterOperations(op2))
