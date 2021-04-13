/*
You are given a string consisting of letters x and y, such as 'xyxxxyxyy'.
In addition, you have an operation called 'flip', which changes a single x to y
or vice versa.

Determine how many times you would need to apply this operation to ensure that all 
x's come before all y's. In the preceding example, it suffices to flip the second and
sixth characters, so you should return 2.
*/

// Time: O(n)
// Space: O(n)

const minFlips = string => {
    const dp = new Array(string.length).fill().map(() => new Array(2));
    dp[0][0] = string[0] === 'x' ? 0 : 1;
    dp[0][1] = string[0] === 'y' ? 0 : 1;

    for (let i = 1; i < string.length; i++) {
        dp[i][0] = dp[i - 1][0] + (string[i] === 'x' ? 0 : 1);
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + (string[i] === 'x' ? 1 : 0);
    }

    return Math.min(dp[string.length - 1][0], dp[string.length - 1][1]);
}

console.log(minFlips('yyx'))
console.log(minFlips('xyxxxyxyyy'))
console.log(minFlips('xyxxxyxyyx'))
console.log(minFlips('yyxxx'))