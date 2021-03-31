/*
You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).

Note: You cannot rotate an envelope.



Example 1:

Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
Output: 3
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
Example 2:

Input: envelopes = [[1,1],[1,1],[1,1]]
Output: 1


Constraints:

1 <= envelopes.length <= 5000
envelopes[i].length == 2
1 <= wi, hi <= 104
*/

var maxEnvelopes = function (envelopes) {
    envelopes.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        } else {
            return a[0] - b[0];
        }
    })
    const dp = [1];
    let result = 0;
    for (let i = 0; i < envelopes.length; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (envelopes[j][1] < envelopes[i][1]) {
                max = Math.max(max, dp[j]);
            }
        }
        dp[i] = max + 1;
        result = Math.max(result, dp[i]);
    }
    return result;
};

// Time: O(n^2)
// Space: O(n)