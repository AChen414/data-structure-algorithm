/*
Find the minimum number of coins required to make n cents.

You can use standard American denominations, that is, 1c, 5c, 10c, 25c.

For example, given n = 16, return 3 since we can make it with a 10c, 5c, and 1c coin.

Brute force solution would be to go through each coin and subtract it from amount til we hit 0
*/

const minCoins = (n) => {
    const coins = [1, 5, 10, 25];
    const dp = new Array(n + 1).fill(n + 1);
    dp[0] = 0;
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[n] === n + 1 ? -1 : dp[n];
}