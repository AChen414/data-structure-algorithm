/*
Given an integer array nums, return the length of the longest wiggle sequence.

A wiggle sequence is a sequence where the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with fewer than two elements is trivially a wiggle sequence.

For example, [1, 7, 4, 9, 2, 5] is a wiggle sequence because the differences (6, -3, 5, -7, 3) are alternately positive and negative.
In contrast, [1, 4, 7, 2, 5] and [1, 7, 4, 5, 5] are not wiggle sequences, the first because its first two differences are positive and the second because its last difference is zero.
A subsequence is obtained by deleting some elements (eventually, also zero) from the original sequence, leaving the remaining elements in their original order.



Example 1:

Input: nums = [1,7,4,9,2,5]
Output: 6
Explanation: The entire sequence is a wiggle sequence.
Example 2:

Input: nums = [1,17,5,10,13,15,10,5,16,8]
Output: 7
Explanation: There are several subsequences that achieve this length. One is [1,17,10,13,10,16,8].
Example 3:

Input: nums = [1,2,3,4,5,6,7,8,9]
Output: 2
*/

var wiggleMaxLength = function (nums) {
    if (nums.length === 0) return 0;

    const dir = [1];
    let prev = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < prev) {
            dir.push('D');
        } else if (nums[i] > prev) {
            dir.push('U');
        } else {
            dir.push('E');
        }
        prev = nums[i];
    }

    let result = 1;
    let curr;
    for (let i = 1; i < dir.length; i++) {
        if (!curr && dir[i] !== 'E') {
            result++;
            curr = dir[i];
            while (dir[i + 1] === curr && i < dir.length) i++;
        } else if (dir[i] === 'D') {
            result++;
            curr = dir[i];
            while (dir[i + 1] !== 'U' && i < dir.length) i++;
        } else if (dir[i] === 'U') {
            result++;
            curr = dir[i];
            while (dir[i + 1] !== 'D' && i < dir.length) i++;
        }
    }
    return result;
};

// Time: O(n)
// Space: O(n)

function wiggleMaxLength(nums) {
    if (nums.length < 2) return nums.length;
    let down = 1, up = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            up = down + 1;
        }
        else if (nums[i] < nums[i - 1]) {
            down = up + 1;
        }
    }
    return Math.max(down, up);
}

// Time: O(n)
// Space: O(1)