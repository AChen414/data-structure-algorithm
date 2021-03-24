/*
Given two arrays A and B of equal size, the advantage of A with respect to B is the number of indices i for which A[i] > B[i].

Return any permutation of A that maximizes its advantage with respect to B.



Example 1:

Input: A = [2,7,11,15], B = [1,10,4,11]
Output: [2,11,7,15]
Example 2:

Input: A = [12,24,8,32], B = [13,25,32,11]
Output: [24,32,8,12]


Note:

1 <= A.length = B.length <= 10000
0 <= A[i] <= 10^9
0 <= B[i] <= 10^9
*/

var advantageShuffle = function (A, B) {
    A.sort((a, b) => a - b);
    for (let i = 0; i < B.length; i++) {
        if (B[i] < A[A.length - 1]) {
            let j = 0;
            while (B[i] >= A[j]) j++;
            B[i] = A.splice(j, 1);
        } else {
            B[i] = A.shift();
        }
    }
    return B;
}

// Time: O(n^2)
// Space: O(1)

