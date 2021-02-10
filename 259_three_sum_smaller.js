/*
Given an array of n integers nums and a target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

Example:

Input: nums = [-2,0,1,3], and target = 2
Output: 2
Explanation: Because there are two triplets which sums are less than 2:
             [-2,0,1]
             [-2,0,3]
*/

var threeSumSmaller = function (nums, target) {
    nums.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum < target) {
                count++;
                left++;
            } else {
                right--;
            }
        }
    }
    return count;
}

// Time: O(n^2)
// Space: O(1)