// mcs -out:1929.exe 1929.cs
// mono 1929.exe

using System;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int[] GetConcatenation(int[] nums)
    {
        List<int> arr = nums.ToList();

        foreach (var e in nums)
        {
            arr.Add (e);
        }

        return arr.ToArray();
    }

    static void Main(string[] args)
    {
        Solution solution = new Solution();
        Console
            .WriteLine("[{0}]",
            string
                .Join(", ", solution.GetConcatenation(new int[] { 1, 2, 1 })));
    }
}
