// mcs -out:1480.exe 1480.cs
// mono 1480.exe

using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int[] RunningSum(int[] nums)
    {
        List<int> arr = new List<int>();
        int eSum = 0;

        foreach (var e in nums)
        {
            eSum += e;
            arr.Add (eSum);
        }

        return arr.ToArray();
    }

    static void Main(string[] args)
    {
        Solution solution = new Solution();
        Console
            .WriteLine("[{0}]",
            string.Join(", ", solution.RunningSum(new int[] { 1, 2, 3, 4 })));
    }
}
