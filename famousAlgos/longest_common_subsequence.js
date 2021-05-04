const longestCommonSubsequence = (string1, string2) => {
    // Initialize dp array for string comparison. Array at position is answer to LCS
    // if the strings were to end at that index
    const dp = [];
    for (let i = 0; i < string2.length; i++) {
        dp[i] = new Array(string1.length + 1).fill(0);
    }
    
    // Go through each combination of strings to find answer at dp array index
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

// Time: O(m*n) where m and n are the length of the strings
// Space: O(m*n)