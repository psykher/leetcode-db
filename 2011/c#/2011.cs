// mcs -out:2011.exe 2011.cs
// mono 2011.exe

using System;
using System.Text.RegularExpressions;

public class Solution
{
    public int FinalValueAfterOperations(string[] operations)
    {
        int xVal = 0;

        foreach (string e in operations) {
            xVal += (new Regex(@"(^.*\+\+.*$)").Match(e).Success) ? 1 : -1;
        }

        return xVal;
    }

    static void Main(string[] args)
    {
        Solution solution = new Solution();
        Console
            .WriteLine("[{0}]",
            string
                .Join(", ",
                solution
                    .FinalValueAfterOperations(new string[] {
                        "++X",
                        "++X",
                        "X++"
                    })));

        Console
            .WriteLine("[{0}]",
            string
                .Join(", ",
                solution
                    .FinalValueAfterOperations(new string[] {
                        "--X",
                        "X++",
                        "X++"
                    })));
    }
}
