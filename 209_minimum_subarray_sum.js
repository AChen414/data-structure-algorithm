/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.



Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/

var minSubArrayLen = function (target, nums) {
    let windowStart = 0;
    let runningSum = 0;
    let length = 0;
    let minLength = Infinity;

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        runningSum += nums[windowEnd];
        length++;
        while (runningSum >= target) {
            if (length < minLength) minLength = length;
            runningSum -= nums[windowStart];
            windowStart++;
            length--;
        }
    }
    return minLength === Infinity ? 0 : minLength;
};

// Time: O(n)
// Space: O(1)