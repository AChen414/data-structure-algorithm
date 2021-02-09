/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.



Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

*/

// O(n^2) time | O(1) space
var maxSubArray = function (nums) {
    let runningSum = 0;
    let maxSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            runningSum += nums[j];
            if (runningSum > maxSum) maxSum = runningSum;
        }
        runningSum = 0;
    }
    return maxSum;
};

// O(n) time | O(1) space
var maxSubArray = function (nums) {
    let current = nums[0];
    let max = current;
    for (let i = 1; i < nums.length; i++) {
        current = Math.max(nums[i] + current, nums[i]);
        max = Math.max(max, current);
    }
    return max;
}