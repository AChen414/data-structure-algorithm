/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.



Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

var sortedSquares = function (nums) {
    let left = 0, right = nums.length - 1;
    const result = [];
    while (left < right) {
        if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
            result.push(nums[left] * nums[left]);
            left++;
        } else {
            result.push(nums[right] * nums[right]);
            right--;
        }
    }
    result.push(nums[left] * nums[left]);
    return result.reverse()
};

// Time: O(n)
// Space: O(n)