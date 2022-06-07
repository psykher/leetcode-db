// mcs -out:1672.exe 1672.cs
// mono 1672.exe

using System;

public class Solution
{
    public int MaximumWealth(int[][] accounts)
    {
        int hb = 0;

        foreach (int[] customer in accounts)
        {
            int bb = 0;
            foreach (int balance in customer)
            {
                bb += balance;
            }
            hb = (bb > hb) ? bb : hb;
        }

        return hb;
    }

    static void Main(string[] args)
    {
        Solution solution = new Solution();
        Console
            .WriteLine("[{0}]",
            string
                .Join(", ",
                solution
                    .MaximumWealth(new int[][] {
                        new int[] { 1, 2, 3 },
                        new int[] { 3, 2, 1 }
                    })));

        Console
            .WriteLine("[{0}]",
            string
                .Join(", ",
                solution
                    .MaximumWealth(new int[][] {
                        new int[] { 1, 5 },
                        new int[] { 7, 3 },
                        new int[] { 3, 5 }
                    })));
    }
}
