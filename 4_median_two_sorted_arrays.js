/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.



Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000
Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000


Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106


Follow up: The overall run time complexity should be O(log (m+n)).
*/

// Time: O(m + n)
// Space: O(m + n)
var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0, j = 0;
    let merged = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }
    if (i === nums1.length) {
        merged = merged.concat(nums2.slice(j));
    } else {
        merged = merged.concat(nums1.slice(i));
    }
    if (merged.length % 2) {
        return merged[Math.floor(merged.length / 2)];
    } else {
        return (merged[merged.length / 2] + merged[(merged.length / 2) - 1]) / 2;
    }
};

// Time: O(log(m + n))
// Space: O(1)
var findMedianSortedArrays = function (nums1, nums2) {
    // We want to binary search shorter array
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }
    let x = nums1.length;
    let y = nums2.length;
    let left = 0;
    let right = x;
    while (left <= right) {
        let partitionX = Math.floor((left + right) / 2);
        let partitionY = Math.floor(((x + y + 1) / 2) - partitionX);
        
        // If partitionX === 0 that means there are no elements in maxLeftX so we set it -Infinity
        // If partitionY === 0 same as above
        let maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        let maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        // If partitionX === x which is the length of the array X that means there are no elements on the right so we set it to Infinity
        let minRightY = (partitionY === y) ? Infinity : nums2[partitionY];
        let minRightX = (partitionX === x) ? Infinity : nums1[partitionX];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((x + y) % 2 === 1) {
                return Math.max(maxLeftX, maxLeftY);
            } else {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2
            }
        } else if (maxLeftX > minRightY) {
            right = partitionX - 1;
        } else {
            left = partitionX + 1;
        }
    }
};