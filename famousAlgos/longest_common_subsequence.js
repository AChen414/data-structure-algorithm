const longestCommonSubsequence = (string1, string2) => {
    const dp = [];
    for (let i = 0; i < string2.length; i++) {
        dp[i] = new Array(string1.length + 1).fill(0);
    }

    for (let i = 1; i <= string1.length; i++) {
        for (let j = 1; j <= string2.length; j++) {
            if (string1[i - 1] !== string2[j - 1]) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            } else {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
        }
    }
    return dp[string1.length][string2.length];
}