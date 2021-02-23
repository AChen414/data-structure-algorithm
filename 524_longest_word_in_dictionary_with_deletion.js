/*
Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

Example 1:
Input:
s = "abpcplea", d = ["ale","apple","monkey","plea"]

Output:
"apple"
Example 2:
Input:
s = "abpcplea", d = ["a","b","c"]

Output:
"a"
*/

var findLongestWord = function (s, d) {
    d.sort((a, b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return b.length - a.length;
    });

    for (let i = 0; i < d.length; i++) {
        let word = d[i];
        let wordIdx = 0;
        for (let sIdx = 0; sIdx < s.length; sIdx++) {
            if (s[sIdx] === word[wordIdx]) wordIdx++;
        }
        if (wordIdx === word.length) return word;
    }

    return '';
};

// Time: O(nlog(n))
// Space: O(1)

var findLongestWord = function (s, d) {
    let result = '';

    for (let i = 0; i < d.length; i++) {
        let word = d[i];
        let wordIdx = 0;

        for (let strIdx = 0; strIdx < s.length; strIdx++) {
            if (s[strIdx] === word[wordIdx]) wordIdx++;
        }

        if (wordIdx === word.length) {
            if (word.length > result.length) {
                result = word;
            } else if (word.length === result.length) {
                if (word < result) result = word;                               // this gives us the word that comes first lexicographically
            }
        }
    }

    return result;
};

// Time: O(n * m) where n is the size of input array and m is the length of the longest str
// Space: O(m)