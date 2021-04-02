function stockPairs(stocksProfit, target) {
    let sorted = stocksProfit.sort((a, b) => a - b);
    let uniquePairs = new Set();
    let count = 0;

    let i = 0;
    let j = sorted.length - 1;
    while (i < j) {
        let sum = sorted[i] + sorted[j];
        if (sum === target) {
            let str = `${sorted[i]}-${sorted[j]}`;
            if (!uniquePairs.has(str)) {
                uniquePairs.add(str);
                count++
            }
        } else if (sum > target) {
            j--
        } else {
            i++
        }
    }
    return count;
}

// Time: O(log(n)) since we sort the array
// Space: O(n) since w could store all numbers in Set