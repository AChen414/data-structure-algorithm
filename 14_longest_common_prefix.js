/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



    Example 1:

Input: strs = ["flower", "flow", "flight"]
Output: "fl"
Example 2:

Input: strs = ["dog", "racecar", "car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

var longestCommonPrefix = function (strs) {
    let longest = "";
    if (!strs.length) return longest;
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i] || i >= strs[j].length) {
                return longest;
            }
        }
        longest += strs[0][i];
    }
    return longest
};

// Time: O(n) where n is the total number of letters or O(n * m) where n is the number of words and m is the amount of letters in shortest string
// Space: O(1)