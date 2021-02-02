/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

var twoSum = function (nums, target) {
    let possiblePair = {}; // { 2: 0, }

    for (let i = 0; i < nums.length; i++) {
        let possibleMatch = target - nums[i];

        if (possiblePair[nums[i]] !== undefined) {
            return [i, possiblePair[nums[i]]];
        } else {
            possiblePair[possibleMatch] = i;
        }
        
    }
    return null;
};

// Time: O(n) since we only loop through input array once
// Space: O(n) since we could possibly store input into 