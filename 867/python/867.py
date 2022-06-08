# python 867.py

class Solution(object):
    def transpose(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[List[int]]
        """
        tMat = []

        for i in range(len(matrix[0])):
            eMat = []
            for j in range(len(matrix)):
                eMat.append(matrix[j][i])
            tMat.append(eMat)

        return tMat

solution = Solution()

print(solution.transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
print(solution.transpose([[1, 2, 3], [4, 5, 6]]))
