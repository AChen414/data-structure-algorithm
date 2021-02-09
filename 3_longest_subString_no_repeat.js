/* 
Given a string s, find the length of the longest substring without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
*/

// Queue
var lengthOfLongestSubstring = function (s) {
    const queue = [];
    let letters = {};
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        if (!letters[letter]) {
            letters[letter] = true;
            queue.push(letter);
        } else {
            if (queue.length > max) max = queue.length;
            while (letters[letter]) {
                letters[queue.shift()] = false;
            }
            letters[letter] = true;
            queue.push(letter);
        }
        if (queue.length > max) max = queue.length
    }
    return max;
};

// Sliding Window
var lengthOfLongestSubstring = function (s) {
    const letters = {};
    let windowStart = 0;
    let maxLength = 0;
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        if (!letters[s[windowEnd]]) {
            letters[s[windowEnd]] = true;
        } else {
            while (letters[s[windowEnd]] === true) {
                letters[s[windowStart]] = false;
                windowStart++;
            }
            letters[s[windowEnd]] = true;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring("ohvhjdml"));

// Time: O(n) since we only go through input string once
// Space: O(n) since we could store entire string in queue/hashmap