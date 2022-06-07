// mcs -out:1108.exe 1108.cs
// mono 1108.exe

using System;
using System.Text.RegularExpressions;

public class Solution
{
    public string DefangIPaddr(string address)
    {
        string result = Regex.Replace(address,@"(\.)","[.]");

        return result;
    }

    static void Main(string[] args)
    {
        Solution solution = new Solution();
        Console
            .WriteLine("[{0}]",
            string
                .Join(", ",
                solution
                    .DefangIPaddr("1.1.1.1")));

        Console
            .WriteLine("[{0}]",
            string
                .Join(", ",
                solution
                    .DefangIPaddr("255.100.50.0")));
    }
}
