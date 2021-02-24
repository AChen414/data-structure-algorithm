/*
Given a balanced parentheses string S, compute the score of the string based on the following rule:

() has score 1
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.


Example 1:

Input: "()"
Output: 1
Example 2:

Input: "(())"
Output: 2
Example 3:

Input: "()()"
Output: 2
Example 4:

Input: "(()(()))"
Output: 6
*/

var scoreOfParentheses = function (S) {
    let score = 0;
    const stack = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            stack.push(score);
            score = 0;
        } else {
            score = stack.pop() + Math.max(score * 2, 1);
        }
    }
    return score;
}

// Time: O(n)
// Space: O(n)

var scoreOfParentheses = function (S) {
    let score = 0;
    let depth = 0;

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            depth++;
        } else {
            depth--;
        }

        if (S[i] === ')' && S[i - 1] === '(') score += Math.pow(2, depth);
    }

    return score;
}

// Time: O(n)
// Space: O(1)