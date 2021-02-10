/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.



Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let closest = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (Math.abs(target - sum) < Math.abs(target - closest)) closest = sum;
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                return target;
            }
        }
    }
    return closest;
};

// Time: O(n^2);
// Space: O(1);