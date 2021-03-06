/*
You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.



Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation:
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
*/

var maxSlidingWindow = function(nums, k) {
    const result = [];
    const q = [];
    for (let i = 0; i < nums.length; i++) {
        while (nums[q[q.length - 1]] <= nums[i]) {
            q.pop();
        }
        q.push(i);
        if (q[0] === i - k) q.shift();
        if (i >= k - 1) result.push(nums[q[0]]);
    }
    return result;
}

// Time: O(n) since we go through each element only once
// Space: O(k) since we store queue of size k