/*
Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
*/

var findMaxAverage = function (nums, k) {
    let maxAvg = -Infinity;
    let runningSum = 0;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        runningSum += nums[windowEnd];
        if (windowEnd >= k - 1) {
            maxAvg = (runningSum / k) > maxAvg ? runningSum / k : maxAvg;
            runningSum -= nums[windowStart];
            windowStart++;
        }
    }
    return maxAvg;
};

// Time: O(n) since w only look at every element once
// Space: O(1) since the variables we store don't change with the input