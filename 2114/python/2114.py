# python 2114.py

class Solution(object):
    def mostWordsFound(self, sentences):
        """
        :type sentences: List[str]
        :rtype: int
        """
        maxWords = 0

        for sentence in sentences:
            maxWords = len(sentence.split(" ")) if (
                maxWords < len(sentence.split(" "))) else maxWords

        return maxWords

solution = Solution()

print(solution.mostWordsFound(
    ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))
print(solution.mostWordsFound(
    ["please wait", "continue to fight", "continue to win"]))
