// mcs -out:1470.exe 1470.cs
// mono 1470.exe

using System;
using System.Collections.Generic;

public class Solution
{
    public int[] Shuffle(int[] nums, int n)
    {
        List<int> arr = new List<int>();

        for (int i = 0; i < n; i++)
        {
            arr.Add(nums[i]);
            arr.Add(nums[i + n]);
        }

        return arr.ToArray();
    }

    static void Main(string[] args)
    {
        Solution solution = new Solution();
        Console
            .WriteLine("[{0}]",
            string
                .Join(", ",
                solution.Shuffle(new int[] { 2, 5, 1, 3, 4, 7 }, 3)));

        Console
            .WriteLine("[{0}]",
            string
                .Join(", ",
                solution.Shuffle(new int[] { 1, 2, 3, 4, 4, 3, 2, 1 }, 4)));

        Console
            .WriteLine("[{0}]",
            string.Join(", ", solution.Shuffle(new int[] { 1, 1, 2, 2 }, 2)));
    }
}
