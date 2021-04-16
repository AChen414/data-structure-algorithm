/*
There is an N by M matrix of zeroes. Given N and M, write a function to count the
number of ways of starting at the top-left corner and getting to the bottom-right
corner. You can only move right or down.

For example, given a 2 by 2 matrix, you should return 2, since there are two ways
to get to the bottom-right
    -Right, then down
    -Down, then right

Given a 5 by 5 matrix, there are 70 ways to get to the bottom right
*/

// Time: O(2^(m + n))
// Space: O(m + n)

const matrixTraversal = (n, m) => {
    if (n === 1 || m === 1) return 1;
    return matrixTraversal(n - 1, m) + matrixTraversal(n, m - 1);
}

// console.log(matrixTraversal(2, 2))
// console.log(matrixTraversal(3, 3))
// console.log(matrixTraversal(5, 5))