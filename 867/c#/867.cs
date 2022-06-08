// mcs -out:867.exe 867.cs
// mono 867.exe

using System;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using System.Linq;

public class Solution
{
    public int[][] Transpose(int[][] matrix)
    {
        List<List<int>> tMat = new List<List<int>>();
        List<int> eMat = new List<int>();

        for (int i = 0; i < matrix[0].Length; i ++) {
            eMat = new List<int>();
            for (int j = 0; j < matrix.Length; j ++) {
                eMat.Add(matrix[j][i]);
            }

            tMat.Add(eMat);
        }

        return tMat.Select(Enumerable.ToArray).ToArray();
    }

    static void Main(string[] args)
    {
        Solution solution = new Solution();
        Console
            .WriteLine("[{0}]",
            string
                .Join(", ",
                solution
                    .Transpose(new int[][] {new int[]{1,2,3},new int[]{4,5,6},new int[]{7,8,9}}).Cast<int[]>()));

        Console
            .WriteLine("[{0}]",
            string
                .Join(", ",
                solution
                    .Transpose(new int[][]{new int[]{1,2,3},new int[]{4,5,6}}).Cast<int[]>()));
    }
}
