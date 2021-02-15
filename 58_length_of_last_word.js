/*
Given a string s consists of some words separated by spaces, return the length of the last word in the string.If the last word does not exist, return 0.

A word is a maximal substring consisting of non - space characters only.



    Example 1:

Input: s = "Hello World"
Output: 5
Example 2:

Input: s = " "
Output: 0
*/

var lengthOfLastWord = function (s) {
    let words = s.split(' ');
    i = words.length - 1;
    while (i >= 0) {
        if (words[i] === '') {
            i--;
        } else {
            return words[i].length;
        }
    }
    return 0;
};

// Time: O(n)
// Space: O(n)

var lengthOfLastWord = function (s) {
    let length = 0;
    let tail = s.length - 1;
    while (tail >= 0 && s[tail] === ' ') tail--;
    while (tail >= 0 && s[tail] !== ' ') {
        tail--;
        length++;
    }
    return length;
};

// Time: O(n)
// Space: O(1)