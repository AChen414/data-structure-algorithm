/*
In LOL world, there is a hero called Teemo and his attacking can make his enemy Ashe be in poisoned condition. Now, given the Teemo's attacking ascending time series towards Ashe and the poisoning time duration per Teemo's attacking, you need to output the total time that Ashe is in poisoned condition.

You may assume that Teemo attacks at the very beginning of a specific time point, and makes Ashe be in poisoned condition immediately.

Example 1:

Input: [1,4], 2
Output: 4
Explanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned immediately.
This poisoned status will last 2 seconds until the end of time point 2.
And at time point 4, Teemo attacks Ashe again, and causes Ashe to be in poisoned status for another 2 seconds.
So you finally need to output 4.


Example 2:

Input: [1,2], 2
Output: 3
Explanation: At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned.
This poisoned status will last 2 seconds until the end of time point 2.
However, at the beginning of time point 2, Teemo attacks Ashe again who is already in poisoned status.
Since the poisoned status won't add up together, though the second poisoning attack will still work at time point 2, it will stop at the end of time point 3.
So you finally need to output 3.
*/

var findPoisonedDuration = function (timeSeries, duration) {
    let totalTime = 0;
    if (!timeSeries.length) return totalTime;
    let left = timeSeries[0]
    let right = timeSeries[0] + duration;

    for (let i = 1; i < timeSeries.length; i++) {
        if (timeSeries[i] <= right) {
            right = timeSeries[i] + duration;
        } else {
            totalTime += right - left;
            left = timeSeries[i];
            right = timeSeries[i] + duration;
        }
    }

    totalTime += right - left;
    return totalTime;
};

// Time: O(n)
// Space: O(1)