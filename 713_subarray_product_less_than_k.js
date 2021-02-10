/*
Your are given an array of positive integers nums.

Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

Example 1:
Input: nums = [10, 5, 2, 6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
*/

var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) return 0;
    let count = 0;
    let left = 0;
    let product = 1;
    for (let right = 0; right < nums.length; right++) {
        product *= nums[right];
        while (product >= k) {
            product /= nums[left];
            left++;
        }
        count += right - left + 1;
    }
    return count;
};

// Time: O(n)
// Space: O(1) 