// mcs -out:2114.exe 2114.cs
// mono 2114.exe

using System;

public class Solution
{
    public int MostWordsFound(string[] sentences)
    {
        int maxWords = 0;

        foreach (var sentence in sentences)
        {
            maxWords =
                (maxWords < sentence.Split(" ").Length)
                    ? sentence.Split(" ").Length
                    : maxWords;
        }

        return maxWords;
    }

    static void Main(string[] args)
    {
        Solution solution = new Solution();
        Console
            .WriteLine("[{0}]",
            string
                .Join(", ",
                solution
                    .MostWordsFound(new string[] {
                        "alice and bob love leetcode",
                        "i think so too",
                        "this is great thanks very much"
                    })));

        Console
            .WriteLine("[{0}]",
            string
                .Join(", ",
                solution
                    .MostWordsFound(new string[] {
                        "please wait",
                        "continue to fight",
                        "continue to win"
                    })));
    }
}
