/*
Given weights and profits of n items, we are asked to put these items in a knapsack
that has a capacity c. The goal is to get the max profit from items in the knapsack.
Each item can only be selected once
weights = [2, 3, 1, 4]
profits = [4, 5, 3, 7]
knapsack = 5

return 10
*/

// Time: O(2^n)
// Space: O(n) since it's depth first and we'll only have n recursive calls on the call stack

function knapsack(profits, weights, capacity) {
    return knapsackRecursion(profits, weights, capacity, 0);
}

function knapsackRecursion(profits, weights, capacity, currentIndex) {
    if (capacity <= 0 || currentIndex >= profits.length) return 0;

    let profit1 = 0;
    if (weights[currentIndex] <= capacity) {
        profit1 = profits[currentIndex] + knapsackRecursion(profits, weights, capacity - weights[currentIndex], currentIndex + 1);
    }

    const profit2 = knapsackRecursion(profits, weights, capacity, currentIndex + 1);
    return Math.max(profit1, profit2);
}