// mcs -out:2235.exe 2235.cs
// mono 2235.exe

using System;

public class Solution
{
    public int Sum(int num1, int num2)
    {
        return num1 + num2;
    }

    static void Main(string[] args)
    {
        Solution solution = new Solution();
        Console.WriteLine(solution.Sum(12, 5));
    }
}
