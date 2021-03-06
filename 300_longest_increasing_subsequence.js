/*
Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].



Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1


Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104


Follow up:

Could you come up with the O(n2) solution?
Could you improve it to O(n log(n)) time complexity?
*/

// Time: O(2^n) size of recursion tree
// Space: O(2^n)
var lengthOfLIS = function (nums) {
    return LIS(nums, -Infinity, 0);
};

var LIS = function (nums, prev, i) {
    if (i === nums.length) return 0;
    let include = 0;
    if (nums[i] > prev) {
        include = 1 + LIS(nums, nums[i], i + 1);
    }
    let notIncluded = LIS(nums, prev, i + 1);
    return Math.max(include, notIncluded);
}


// Time: O(n^2) since we use a nested loop
// Space: O(n) for the dp array
var lengthOfLIS = function (nums) {
    const dp = [1];
    let result = 1;
    for (let i = 0; i < nums.length; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                max = Math.max(max, dp[j]);
            }
        }
        dp[i] = max + 1;
        result = Math.max(result, dp[i]);
    }
    return result;
};

