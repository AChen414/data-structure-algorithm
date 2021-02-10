/*
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.



Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
Example 3:

Input: nums = [0]
Output: [0]
Example 4:

Input: nums = [1]
Output: [1]
*/

var sortColors = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let i = 0;
    while (i <= right && left < right) {
        if (nums[i] === 0) {
            nums[i] = nums[left];
            nums[left] = 0;
            left++;
            i++;
        } else if (nums[i] === 2) {
            nums[i] = nums[right];
            nums[right] = 2;
            right--;
        } else {
            i++;
        }
    }
    return nums;
};

// Time: O(n)
// Space: O(1)