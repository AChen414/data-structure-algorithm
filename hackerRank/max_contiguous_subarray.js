/*
Calculate the sum of the max contiguous subarray
*/

function maxSubarray(array) {
    let max = -Infinity;
    let prev = 0;
    for (let i = 0; i < array.length; i++) {
        prev = Math.max(arr[i], arr[i] + prev);
        max = Math.max(max, prev);
    }
    return max;
}