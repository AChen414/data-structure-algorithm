/*
Given a string S, find the length of the longest substring T that contains at most k distinct characters

Example 1:
Input: S = "eceba" and k = 3
Output: 4
Explanation: T = "eceb"
*/

var longestSubstring = function(string, k) {
    let windowStart = 0;
    let maxLength = 0;
    const charFrequency = {};

    for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
        if (!charFrequency[string[windowEnd]]) charFrequency[string[windowEnd]] = 0;
        charFrequency[string[windowEnd]]++;
        while (Object.keys(charFrequency).length > k) {
            charFrequency[string[windowStart]]--;
            if (charFrequency[string[windowStart]] === 0) delete charFrequency[string[windowStart]];
            windowStart++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}

// Time: O(n)
// Space: O(k)

console.log(longestSubstring('eceba', 3));
console.log(longestSubstring('world', 4));
