/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.



Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

var merge = function (intervals) {
    if (intervals.length < 2) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    let left = intervals[0][0], right = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];

        if (interval[0] <= right) {
            right = Math.max(interval[1], right);
        } else {
            result.push([left, right])
            left = interval[0];
            right = interval[1];
        }
    }

    result.push([left, right])
    return result;
};

// Time: O(nlog(n))
// Space: O(n)