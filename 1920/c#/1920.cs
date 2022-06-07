// mcs -out:1920.exe 1920.cs
// mono 1920.exe

using System;

public class Solution
{
    public int[] BuildArray(int[] nums)
    {
        // List<int> arr = new List<int>();
        int[] arr = new int[nums.Length];

        for (int i = 0; i < nums.Length; i++)
        {
            arr[i] = nums[nums[i]];
            // arr.add(nums[nums[i]]);
        }

        // return arr.ToArray();
        return arr;
    }

    static void Main(string[] args)
    {
        Solution solution = new Solution();
        Console
            .WriteLine("[{0}]",
            string
                .Join(", ",
                solution.BuildArray(new int[] { 0, 2, 1, 5, 3, 4 })));
    }
}
