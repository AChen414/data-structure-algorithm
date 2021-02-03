/*
Given a string s, return the longest palindromic substring in s.



Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"

*/
var longestPalindrome = function (s) {
    let longestP = '';
    for (let i = 0; i < s.length; i++) {
        let word1 = expand(s, i, i);
        let word2 = expand(s, i, i + 1);
        word1.length > word2.length ? word = word1 : word = word2;
        if (longestP.length < word.length) {
            longestP = word;
        }
    }
    return longestP;
};

const expand = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left + 1, right);
}

// Time: O(n^2) since we loop through all characters and expand outward from each
// Space: O(n) since we store a word