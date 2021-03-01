/*
Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

Example 1:
Input: [0, 1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
Example 2:
Input: [0, 1, 0]
Output: 2
Explanation: [0, 1](or[1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
Note: The length of the given binary array will not exceed 50, 000.
*/

var findMaxLength = function (nums) {
    const hash = { 0: -1 };
    let sum = 0;
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        nums[i] ? sum++ : sum--;

        if (hash[sum] !== undefined) {
            result = Math.max(result, i - hash[sum]);
        } else {
            hash[sum] = i;
        }
    }
    return result;
};

// Time: O(n)
// Space: O(n)