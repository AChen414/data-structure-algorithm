/*
Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

Return the shortest such subarray and output its length.



Example 1:

Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Example 2:

Input: nums = [1,2,3,4]
Output: 0
Example 3:

Input: nums = [1]
Output: 0
*/

var findUnsortedSubarray = function (nums) {
    let min = Infinity;
    let max = -Infinity;
    let flag = false;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) flag = true;
        if (flag) min = Math.min(nums[i], min);
    }

    flag = false;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] > nums[i + 1]) flag = true;
        if (flag) max = Math.max(nums[i], max);
    }

    let left, right;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > min) {
            left = i;
            break;
        }
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        if (max > nums[i]) {
            right = i;
            break;
        }
    }
    return right - left > 0 ? right - left + 1 : 0;
};

// Time: O(n)
// Space: O(1)